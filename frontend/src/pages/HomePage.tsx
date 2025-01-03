import SearchBar from "../components/SearchBar/SearchBar"
import { useState } from "react"

// Placeholder for actual code
const handleSearch = (query: string) => {
  console.log('Search query:', query);
};



export const HomePage: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [iconUrl, setIconUrl] = useState<string>('');
  const fetchPrivacySpyData = async (companyName: String) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/privacyspy?company_name=${companyName}`);
      if (!response.ok){
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setData(data);
      console.log(data);
      setError(null);

      //getting icon from Google
      if(data?.hostnames?.[0]){
        setIconUrl("https://logo.clearbit.com/" + data.hostnames[0]);
      } 
      else{
        setIconUrl('');
      }
      
    } catch (error: any) {
      setError(error.message);
      setData(null);
    }
  }



  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Welcome to Soteria!</h1>
        <p>This is the home page of Soteria </p>
        <SearchBar onSearch={handleSearch} />

        <SearchBar
          onSearch={(query: string) => {
            fetchPrivacySpyData(query); // Trigger fetch on search
          }}
        />

        {data && (
          <div>
            {iconUrl ? (
              <img src={iconUrl} alt={`${data.name} Icon`} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
              ) : (
              <p>No icon found</p>)}

            <h2>Company Name: {data.company_name}</h2>
          </div>
        )}

        
      </div>
    </div>
  )
}

export default HomePage


