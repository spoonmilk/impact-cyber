import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

interface BreachCardProps {
  breaches: {
    company_name: string;
    breach_date: string;
    reported_date: string;
  }[];
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

  return (
    <>
      {breaches.map((breach, index) => (
        <Card key={index} sx={{ maxWidth: 500, margin: 2 }}>
          <CardHeader
            title={breach.company_name || 'Company Name'}
            subheader="Breach data from public datasets"
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 2 }}>
              Breach Date: {breach.breach_date || 'Unknown'}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Reported Date: {breach.reported_date || 'Unknown'}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
