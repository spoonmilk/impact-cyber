import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import CoPresentIcon from '@mui/icons-material/CoPresent';

export const Footer = () => {
  return (
    <AppBar position="static" className="footer-bar" sx={{ backgroundColor: '#19350C' }}>
    <Toolbar className="footer-toolbar">
      {/* Logo Section */}
      <Box className="footer-logo">
        <CoPresentIcon sx={{ color: '#D5D3CC', mr: 1 }} />
        <Typography component="a" href="/" className="footer-logo-title" sx={{ fontSize: '1.5rem', fontFamily: 'Ubuntu' }}>
          Soteria
        </Typography>
      </Box>

      {/* Legal Links Section */}
      <Box className="footer-legal">
        <Typography component="a" href="/privacy-policy" className="footer-link" sx={{ color: '#687d31', fontFamily: 'Ubuntu' }}>
          Privacy Policy
        </Typography>
        <Typography component="a" href="/terms-of-service" className="footer-link" sx={{ color: '#687d31', fontFamily: 'Ubuntu' }}>
          Terms of Service
        </Typography>
      </Box>

      {/* Social Media Section */}
      <Box className="footer-social">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
          <LinkedInIcon className="footer-icon" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
          <YouTubeIcon className="footer-icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
          <InstagramIcon className="footer-icon" />
        </a>
      </Box>
    </Toolbar>
  </AppBar>
  )
}

export default Footer