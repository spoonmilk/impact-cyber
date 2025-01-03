class BreachesHelper:
    def __init__(self, db_helper, table_name = 'breaches_table'):
        """
        Initialize the BreachesService.
        
        Args:
            db_helper: An instance of DuckDBHelper.
            table_name: Name of the table containing breach data.
        """
        self.db_helper = db_helper
        self.table_name = table_name
    
    def get_breaches(self, company_name: str): 
        """
        Get any existing breaches in the current BreachesHelper's table

        Args:
            company_name (str): The name of the company to return any data breaches of
        """
        
        query = f"""
        SELECT company_name, breach_dates, reported_date
        FROM {self.table_name}
        WHERE LOWER(company_name) = LOWER(?)
        """
        return self.db_helper.execute_query(query, [company_name])