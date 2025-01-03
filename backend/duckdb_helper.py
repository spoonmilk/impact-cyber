import duckdb
import pandas as pd

class DuckDBHelper:
    def __init__(self, db_file=':memory:'):
        """Initialize the DuckDB connection."""
        self.conn = duckdb.connect(db_file)

    def load_csv_to_table(self, csv_path, table_name):
        """Load a CSV into a DuckDB table."""
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
