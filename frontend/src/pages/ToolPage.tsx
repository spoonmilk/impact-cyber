import SearchBar from "../components/SearchBar/SearchBar"
import { useState } from "react"
import InfoCard from "../components/InfoCard/InfoCard";
import BreachCard from "../components/BreachCard/BreachCard";

export const ToolPage: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [breachData, setBreachData] = useState<{ breaches: any[] } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [iconUrl, setIconUrl] = useState<string>('');
  const [childCompany, setChildCompany] = useState<boolean>(false);

  const fetchPrivacySpyData = async (companyName: string) => {
    try {
      setChildCompany(false);
      const response = await fetch(`http://127.0.0.1:5000/api/privacyspy?company_name=${companyName}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setData(data);
      console.log('Privacy Spy Data:', data);
      if (data.parent) {
        setChildCompany(true);
      }
      setError(null);

      // Getting icon from Google
      if (data?.hostnames?.[0]) {
        setIconUrl("https://logo.clearbit.com/" + data.hostnames[0]);
      } else {
        setIconUrl('');
      }

      // Check if rubric is missing and parent exists
      if ((!data.rubric || data.rubric.length === 0) && data.parent) {
        console.log('Rubric missing. Fetching parent company data...');
        const parentResponse = await fetch(
          `http://127.0.0.1:5000/api/privacyspy?company_name=${data.parent}`
        );
        if (!parentResponse.ok) {
          throw new Error('Failed to fetch parent company data');
        }
        const parentData = await parentResponse.json();

        // Merge rubric info from parent with child data
        setData({
          ...data,
          rubric: parentData.rubric || [],
        });

        console.log('Parent Company Data:', parentData);
      }
    } catch (error: any) {
      setError(error.message);
      setData(null);
    }
  };


  const fetchBreachData = async (companyName: string) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/breachcheck?company_name=${companyName}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Backend Response:', data);

      // Ensure breachData is always in the expected format
      setBreachData(data || { breaches: [] });
      setError(null);
    } catch (error) {
      console.error('Error fetching breach data:', error);
      setBreachData({ breaches: [] }); // Default to empty breaches

    }
  };

  return (
    <div className="page-container card-background">
      <div className="page-content">
        <div className="info-section">
          <h1 style={{ paddingBottom: '10px', fontSize: '4rem' }}>Soteria</h1>
          <h4 style={{ paddingBottom: '30px', color: '#6fa9bb' }}>Protect your data from harm</h4>
          <p style={{ paddingBottom: '10px' }}>Thinking about signing up for a service or tool that will take
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
        {data && (<InfoCard data={data} iconUrl={iconUrl} childCompany={childCompany} />)}
        {breachData && <BreachCard breaches={breachData?.breaches || []} />}
      </div>
    </div>
  )
}

export default ToolPage


