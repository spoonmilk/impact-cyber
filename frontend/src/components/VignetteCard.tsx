import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface VignetteCardProps {
    text: string;
    images?: (string | null)[];
    dos: string;
    donts: string;
}

const VignetteCard: React.FC<VignetteCardProps> = ({ text, images, dos, donts }) => {
    const rows = text.split('\n');
    const dos_rows = dos.split('\n');
    const donts_rows = donts.split('\n');
    return (
        <Card sx={{
            backgroundColor: '#19350c', width: '45%', margin: '20px', borderRadius: '10px',
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
                    {images?.[index] && (
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
                    <CardContent sx={{ flex: 1, padding: '0' }}>
                        <Typography variant="h5" color="white">
                            {line.trim()}
                        </Typography>
                    </CardContent>
                </Box>
            ))}

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                    gap: '20px',
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        backgroundColor: '#285233',
                        padding: '10px',
                        borderRadius: '8px',
                    }}
                >
                    <Typography variant="h6" color="white">Do's</Typography>
                    {dos_rows.map((line, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <CardMedia
                                component="img"
                                sx={{
                                    height: 50,
                                    width: 'auto',
                                    maxWidth: '100px',
                                }}
                                image='../src/assets/tick.png'
                                alt={`Row ${index + 1} image`}
                            />
                            <CardContent sx={{ flex: 1 }}>
                                <Typography variant="body1" color="white">{line.trim()}</Typography>
                            </CardContent>
                        </Box>
                    ))}
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        backgroundColor: '#285233',
                        padding: '10px',
                        borderRadius: '8px',
                    }}
                >
                    <Typography variant="h6" color="white">Dont's</Typography>
                    {donts_rows.map((line, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <HighlightOffIcon sx={{ color: 'white', height: 50, width: 'auto', maxWidth: '100px' }} />
                            <CardContent sx={{ flex: 1 }}>
                                <Typography variant="body1" color="white">
                                    {line.trim()}
                                </Typography>
                            </CardContent>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Card>
    );
};

export default VignetteCard;
