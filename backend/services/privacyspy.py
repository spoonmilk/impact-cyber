import requests

def fetch_privacy_spy_data(company_name):
    url = f"https://privacyspy.org/api/v2/products/{company_name}.json"
    
    try:
        response = requests.get(url)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data for {company_name}: {e}")
        return {"error": "Failed to fetch data"}
