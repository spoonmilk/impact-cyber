import SearchBar from "../components/SearchBar/SearchBar"
import { useState } from "react"
import InfoCard from "../components/InfoCard/InfoCard";

// Placeholder for actual code
const handleSearch = (query: string) => {
  console.log('Search query:', query);
};



export const ToolPage: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [iconUrl, setIconUrl] = useState<string>('');
  const fetchPrivacySpyData = async (companyName: String) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/privacyspy?company_name=${companyName}`);
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

  const fetchBreachData = async (companyName: String) => {
    try {
    const response = await fetch(`http://127.0.0.1:5000/api/breachcheck?company_name=${companyName}`);
      if (!response.ok){
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log('Breach Data:', data);
      setError(null);  
      
    } catch (error: any) {
      setError(error.message);
    }
  }



  return (
    <div className="page-container">
      <div className="page-content">
        <div className="info-section">
          <h1 style={{ paddingBottom: '10px', fontSize: '4rem'}}>Soteria</h1>
          <h4 style={{ paddingBottom: '30px', color: '#6fa9bb'}}>Protect your data from harm</h4>
          <p style={{ paddingBottom: '10px'}}>Thinking about signing up for a service or tool that will take 
            information from you? Search their name in the search bar below 
            and receive a comprehensive report of how your data will be used 
            as well as the risks associated with providing such data </p>
        </div>
        
        {/* <SearchBar onSearch={handleSearch} /> */}

        <SearchBar
          onSearch={(query: string) => {
            fetchPrivacySpyData(query); // Trigger fetch on search
            fetchBreachData(query);
          }}
        />

        {/* {data && (
          <div className="company-info-section">
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div>
                {iconUrl ? (
                  <img src={iconUrl} alt={`${data.name} Icon`} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                  ) : (
                    <img src="../src/assets/noIcon.jpg" alt={`${data.name} Icon`} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />)}

                <h2>{data.name}</h2>
              </div>
              <div className="score" >
                <p>Score: {data.score}/10</p>
              </div>
            </div>
            <p>{data.description}</p>
          </div>
        )} */}

        <InfoCard data={data} iconUrl={iconUrl} />
      </div>
    </div>
  )
}

export default ToolPage


