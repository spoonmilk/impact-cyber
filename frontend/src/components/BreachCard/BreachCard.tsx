import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

interface BreachCardProps {
  breaches: { breach_dates: string; company_name: string; reported_date: string }[];
}



export default function BreachCard({ breaches }: BreachCardProps) {
  if (!breaches || breaches.length === 0) {
    return (
      <Card sx={{ maxWidth: 500, margin: 2 }}>
        <CardHeader title="No Breach Data Found" subheader="Breach data from public datasets" />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Could not find any breaches. This does not guarantee the company has not been involved in breaches.
          </Typography>
        </CardContent>
      </Card>
    );
  }

  const capitalizeName = (name: string) => {
    const exceptions = { llc: "LLC", inc: "Inc.", corp: "Corp." };
    return name
      .split(" ")
      .map((word) =>
        exceptions[word.toLowerCase()] || word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(" ");
  }

  const groupedBreaches: Record<string, string[]> = breaches.reduce((acc, breach) => {
    if (!acc[breach.reported_date]) {
      acc[breach.reported_date] = [];
    }
    acc[breach.reported_date].push(breach.breach_dates);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <Card sx={{ width: 600, margin: 2 }}>
      <CardHeader title={capitalizeName(breaches[0].company_name) || 'Company Name'} subheader="Breach data from public datasets" />
      <CardContent>
        {Object.entries(groupedBreaches).map(([reportedDate, breachDates], index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
              Breach reported on: {reportedDate || 'Unknown'}
            </Typography>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              {breachDates.map((date, idx) => (
                <li key={idx}>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Breach Date(s): {date || 'Unknown'}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
