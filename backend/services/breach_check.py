from duckdb_helper import DuckDBHelper
import json
import re

class BreachesService:
    def __init__(self, db_helper, table_name='breaches_table'):
        """
        Initialize the BreachesService.
        
        Args:
            db_helper: An instance of DuckDBHelper.
            table_name: Name of the table containing breach data.
        """
        self.db_helper = db_helper
        self.table_name = table_name
        
    @staticmethod
    def initialize_service():
        """
        Static method to initialize the service with preprocessed data.
        """
        db_helper = DuckDBHelper(db_file=':memory:')
        db_helper.preprocess_and_load_csv('./data/data-breaches.csv', 'breaches_table')
        service = BreachesService(db_helper)
        service.preprocess_data()
        return service
    
    def get_breaches(self, company_name: str):
        """
        Get any existing breaches in the current BreachesHelper's table
        using a fuzzy search on the normalized_name column.

        Args:
            company_name (str): The name of the company to return any data breaches of.
        """
        # Normalize the user input before performing the lookup
        company_name = normalize_name(company_name)

        query = f"""
        SELECT company_name, breach_dates, reported_date
        FROM {self.table_name}
        WHERE normalized_name LIKE '%' || ? || '%'
        """
        
        # Execute the query with the fuzzy-matched parameter
        breaches = self.db_helper.execute_query(query, [company_name])

        print(f"Fuzzy-matching '{company_name}' returned: {json.dumps(breaches)}")
        return breaches
    
    def preprocess_data(self):
        # Add a new column for normalized_name if it doesn't already exist
        query = f"""
        ALTER TABLE {self.table_name}
        ADD COLUMN IF NOT EXISTS normalized_name TEXT;
        """
        self.db_helper.execute_query(query)

        # Populate normalized_name by removing "inc." and converting to lowercase
        query = f"""
        UPDATE {self.table_name}
        SET normalized_name = LOWER(
            REPLACE(company_name, 'inc.', '')
        )
        """
        self.db_helper.execute_query(query)

def normalize_name(name):
    # Convert to lowercase
    name = name.lower()
    # Remove common suffixes
    name = re.sub(r'\b(inc|corp|ltd|llc|co|plc)\b', '', name)
    # Remove special characters
    name = re.sub(r'[^\w\s]', '', name)
    # Replace multiple spaces with a single space
    name = re.sub(r'\s+', ' ', name).strip()
    return name