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

  const allBreachDates = breaches.map((breach) => breach.breach_dates).join(', ');
  const allReportedDates = breaches.map((breach) => breach.reported_date).join(', ');

  return (
    <Card sx={{ maxWidth: 500, margin: 2 }}>
      <CardHeader title={breaches[0].company_name || 'Company Name'} subheader="Breach data from public datasets" />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 2 }}>
          <strong>Breach Dates:</strong> {allBreachDates || 'Unknown'}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <strong>Reported Dates:</strong> {allReportedDates || 'Unknown'}
        </Typography>
      </CardContent>
    </Card>
  );
}
