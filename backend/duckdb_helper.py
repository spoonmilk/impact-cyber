import duckdb
import os
import pandas as pd

class DuckDBHelper:
    def __init__(self, db_file=':memory:'):
        """Initialize the DuckDB connection."""
        # Ensure the directory for the DuckDB file exists
        if db_file != ':memory:':
            os.makedirs(os.path.dirname(db_file), exist_ok=True)
        self.conn = duckdb.connect(db_file)

    def preprocess_and_load_csv(self, csv_path, table_name):
        """
        Preprocess the CSV using pandas and load it into a DuckDB table.
        """
        # Load the dataset
        df = pd.read_csv(csv_path)

        # Rename columns for simplicity
        df.rename(columns={
            "Organization Name": "company_name",
            "Date(s) of Breach  (if known)": "breach_dates",
            "Reported Date": "reported_date"
        }, inplace=True)

        # Fill missing values
        df['breach_dates'] = df['breach_dates'].fillna("Unknown")
        df['reported_date'] = df['reported_date'].fillna("Unknown")

        # Standardize company names
        df['company_name'] = df['company_name'].str.strip().str.lower()

        # Save the preprocessed data to DuckDB
        self.conn.execute(f"CREATE OR REPLACE TABLE {table_name} AS SELECT * FROM df")
    
    def execute_query(self, query, params=None):
        """Execute a SQL query and return results as a list of dictionaries."""
        result = self.conn.execute(query, params or []).fetchdf()
        return result.to_dict(orient='records')

    def close_connection(self):
        """Close the DuckDB connection."""
        self.conn.close()
