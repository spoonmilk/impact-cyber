from duckdb_helper import DuckDBHelper

def breach_info(query):
    """
    Fetches breach information from the databreach dataset.

    Parameters:
        query (str): The email address or domain to query for breach data.

    Returns:
        dict: A dictionary containing breach information for the given query.

    Raises:
        Exception: If an error occurs while querying the databreach dataset.
    """
    
    processor = DuckDBHelper
    
