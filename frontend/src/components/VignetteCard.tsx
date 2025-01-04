import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

// Define the props interface for the VignetteCard component
interface VignetteCardProps {
  text: string;
  images?: (string | null)[]; 
}

const VignetteCard: React.FC<VignetteCardProps> = ({ text, images }) => {
    const rows = text.split('\n');
  return (
    <Card sx={{ backgroundColor: '#19350c', width: '60%', margin: '20px', borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        padding: '20px',
     }}>

        {/* Map each row to a flex container */}
      {rows.map((line, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: index % 3 === 0 ? 'row' : 'row-reverse', // Alternate direction
            alignItems: 'center',
            gap: '20px',
          }}
        >
          {/* Optional Image Column */}
          {images[index] && (
            <CardMedia
              component="img"
              sx={{
                height: 140,
                width: 'auto',
                maxWidth: '200px',
              }}
              image={images[index] || ''}
              alt={`Row ${index + 1} image`}
            />
          )}

          {/* Text Column */}
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h5" color="white">
              {line.trim()}
            </Typography>
          </CardContent>
        </Box>
      ))}


        
      {/* <CardMedia
        component="img"
        sx={{
          height: 140,
          width: 'auto',
          maxWidth: '200px',
          marginRight: '20px',
        }}
        image={imageUrl}
        alt="Vignette image"
      /> */}

      {/* <CardContent sx={{ flex: 1 }}>
        {text.split('\n').map((line, index) => (
          <Typography 
            key={index} 
            variant="h5" 
            color="white" 
            gutterBottom
          >
            {line}
          </Typography>
        ))}
      </CardContent> */}
    </Card>
  );
};

export default VignetteCard;
