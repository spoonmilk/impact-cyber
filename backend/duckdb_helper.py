import duckdb
import pandas as pd

class DuckDBHelper:
    def __init__(self, db_file=':memory:'):
        """Initialize the DuckDB connection."""
        self.conn = duckdb.connect(db_file)

    def load_csv_to_table(self, csv_path='../data/data-breaches.csv', table_name='breaches_table'):
        """Load a CSV into a DuckDB table.
        
        Args:
            csv_path (str): A path to the databreach dataset
            table_name (str): The name of the table to initialize (for duckdb) 
        """
        query = f"""
        CREATE TABLE {table_name} AS
        SELECT * FROM read_csv_auto('{csv_path}')
        """
        self.conn.execute(query)

    def execute_query(self, query):
        """Execute a SQL query and return results as a list of dictionaries."""
        result = self.conn.execute(query).fetchdf()  
        return result.to_dict(orient='records')

    def close_connection(self):
        """Close the DuckDB connection."""
        self.conn.close()
