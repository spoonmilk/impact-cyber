import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}),
);

interface InfoCardProps {
  data: any;
  iconUrl: string;
}

export default function InfoCard({ data, iconUrl }: InfoCardProps) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={
          iconUrl ? (
            <img
              src={iconUrl}
              alt={`${data?.name || 'Company'} Icon`}
              style={{ width: '50px', height: '50px', borderRadius: '50%' }}
            />
          ) : (
            <img
              src="../src/assets/noIcon.jpg"
              alt={`${data?.name || 'Company'} Icon`}
              style={{ width: '50px', height: '50px', borderRadius: '50%' }}
            />
          )
        }
        action={
          <div className="score">
            <Typography variant="h6">Score: {data?.score || 'N/A'}/10</Typography>
          </div>
        }
        title={data?.name || 'Company Name'}
        subheader="Information from PrivacySpy"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 2 }}>
          {data?.description || 'No description available.'}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Show More</span>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Rubric Information
          </Typography>
          {data?.rubric?.length > 0 ? (
            data.rubric.map((item: any, index: number) => (
              <div key={index} style={{ marginBottom: '10px' }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Question: {item.question?.value || 'N/A'}
                </Typography>
                <Typography variant="body2">
                  Option: {item.option?.text || 'N/A'}
                </Typography>
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                  Citations: {item.citations?.join(', ') || 'None'}
                </Typography>
              </div>
            ))
          ) : (
            <Typography variant="body2">No rubric information available.</Typography>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
}
