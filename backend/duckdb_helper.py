import duckdb
import pandas as pd

class DuckDBHelper:
    def __init__(self, db_file=':memory:'):
        """Initialize the DuckDB connection."""
        self.conn = duckdb.connect(db_file)

    def preprocess_and_load_csv(self, csv_path, table_name):
        """
        Preprocess the CSV using pandas and load it into a DuckDB table.
        
        Args:
            csv_path: Path to the CSV file.
            table_name: Name of the DuckDB table to create.
        """
        # Load the dataset with pandas
        df = pd.read_csv(csv_path)

        # Preprocess the dataset
        df = self._preprocess_dataset(df)

        # Save the cleaned dataframe to a temporary CSV
        cleaned_csv_path = "../data/temp/cleaned_breaches.csv"
        df.to_csv(cleaned_csv_path, index=False)

        # Load the cleaned CSV into DuckDB
        query = f"""
        CREATE OR REPLACE TABLE {table_name} AS
        SELECT * FROM read_csv_auto('{cleaned_csv_path}')
        """
        self.conn.execute(query)
        
    def _preprocess_dataset(self, df):
        """
        Preprocess the dataset to clean and normalize data.
        
        Args:
            The pandas DataFrame to preprocess.
            A cleaned pandas DataFrame.
        """
        # Rename columns for simplicity
        df.rename(columns={
            "Organization Name": "company_name",
            "Date(s) of Breach  (if known)": "breach_dates",
            "Reported Date": "reported_date"
        }, inplace=True)

        # Fill missing values
        df['breach_dates'].fillna("Unknown", inplace=True)
        df['reported_date'].fillna("Unknown", inplace=True)

        # Standardize organization names
        df['company_name'] = df['company_name'].str.strip().str.lower()

        df['breach_dates'] = pd.to_datetime(df['breach_dates'], errors='coerce')
        df['reported_date'] = pd.to_datetime(df['reported_date'], errors='coerce')

        # Remove duplicates
        df.drop_duplicates(subset=['company_name', 'breach_dates', 'reported_date'], inplace=True)

        return df
    
    def execute_query(self, query, params=None):
        """Execute a SQL query and return results as a list of dictionaries."""
        result = self.conn.execute(query, params or []).fetchdf()
        return result.to_dict(orient='records')

    def close_connection(self):
        """Close the DuckDB connection."""
        self.conn.close()
