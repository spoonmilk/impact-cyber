import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import CoPresentIcon from '@mui/icons-material/CoPresent';


export const NavigationBar = () => {
  return (
    <AppBar position="static" className="nav-bar" sx={{ backgroundColor: '#19350C' }}>
      <Toolbar className="tool-bar">
        {/* Logo Section */}
        <div className="logo">
          <CoPresentIcon sx={{ color: '#D5D3CC' }} />
          {/* <Typography component="a" href="/" className="logo-title" sx={{ fontSize: '1.7rem', fontFamily: 'Ubuntu' }}>
            Soteria
            </Typography> */}
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <Button href="/" className="nav-item" sx={{ color: '#687d31', fontFamily: 'Ubuntu' }}>
            Home
          </Button>
          <Button href="/tool" className="nav-item" sx={{ color: '#687d31', fontFamily: 'Ubuntu' }}>
            TOOL
          </Button>
          <Button href="/about" className="nav-item" sx={{ color: '#687d31', fontFamily: 'Ubuntu' }}>
            About
          </Button>
          <Button href="/best-practices" className="nav-item" sx={{ color: '#687d31', fontFamily: 'Ubuntu' }}>
            Best Practices
          </Button>
          <Button href="/resources" className="nav-item" sx={{ color: '#687d31', fontFamily: 'Ubuntu' }}>
            Resources
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
