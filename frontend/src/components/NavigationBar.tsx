import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

export const NavigationBar = () => {
  return (
    <AppBar position="static" className="nav-bar">
      <Toolbar className="tool-bar">
        {/* Logo Section */}
        <Typography component="a" href="/" className="logo-title">
          Soteria
        </Typography>

        {/* Navigation Links */}
        <div className="nav-links">
          <Button href="#pricing" className="nav-item">
            Home
          </Button>
          <Button href="#about" className="nav-item">
            About
          </Button>
          <Button href="#resource" className="nav-item">
            Best Practices
          </Button>
          <Button href="#contact" className="nav-item">
            Contact
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
