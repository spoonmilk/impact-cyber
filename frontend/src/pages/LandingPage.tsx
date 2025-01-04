import React from 'react'
import '../css/LandingPage.css'
import { Typography } from '@mui/material';
import VignetteCard from '../components/VignetteCard';
import { Button, Card, CardContent, CardMedia, CardActions, Box } from '@mui/material';

const card1 = (
  <React.Fragment>
    <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h5" component="div">
        Want to learn more about how to keep yourself safe?
      </Typography>
      <Typography variant="body2">
        We are here to help you! 
        <br />
      </Typography>
      <img
          src="../src/assets/hacker.png" 
          alt="hacker"
          style={{ width: '30%',  margin: '20px' }}
        />
    </CardContent>
    <CardActions>
      <Button size="small" href="/best-practices">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

const card2 = (
  <React.Fragment>
    <CardContent  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h5" component="div">
        Try out our tools!
      </Typography>
      <Typography variant="body2">
        Find out if you wanna understand the risk of a platform before signing up for it.
        <br />
      </Typography>
      <img
          src="../src/assets/tool.png" 
          alt="hacker"
          style={{ width: '90%', height: '50%',  margin: '20px' }}
        />
    </CardContent>
    <CardActions>
      <Button size="small" href="/tool">Use the tool</Button>
    </CardActions>
  </React.Fragment>
);

export const LandingPage = () => {
  return (
    <div className="page-container card-background">
      <div>
          <Typography variant="h2" component="h2" sx={{ color: '#19350C', fontFamily: 'Ubuntu', fontWeight: 'bold', backgroundColor: '#D5D3CC', padding: '40px', borderRadius: '90px', marginTop: '40px', marginBottom: '40px' }}  gutterBottom>
            Welcome to Soteria!
          </Typography>
        </div>
      <div className="row page-heading">
        
        <div className="column">
          
          <img
            src="../src/assets/GoogleBreach.png"
            alt="Placeholder"
            className="column-image"
          />
        </div>
        <div className="column">
          <Typography variant="h2" component="h2" align="center" className="poster-text" gutterBottom>
            Why does a <br />breach<br /> matter to me?
          </Typography>
        </div>
      </div>

      <div className="row vignette-wrapper">
        {/* <Typography>Row 2 - Single Column</Typography> */}

        <VignetteCard text={
          `It’s 2024, and another Google breach makes the headlines. You read the headline quickly, barely glancing at the details. Another breach. Another day. You scroll past, figuring it's just the usual drama. Google’s a giant, after all. They’ve got the resources to handle it, right?
          You trust them—why wouldn’t you? They’ve been a part of your life for years: Gmail, Drive, Calendar. It all just works. You’ve got nothing to hide, and surely, Google knows how to keep things safe. After all, it’s not like anyone would want your data anyway.
          But then, a few days later, a strange email pops up in your indiv. It’s a warning from your bank: suspicious login attempts, from a device you don’t recognize.`}
          images={[
            '../src/assets/hacker.png',
            null, // No image for row 2
            '../src/assets/googleIcon.png',
          ]}
          dos={
            `Change passwords if you think your account has been breached.
            Use unique passwords for every account you have. Try not to reuse or paraphrase the same password across multiple sites. If one account is compromised, others will remain secure. 
            Use Multi-factor authentication for all possible accounts - Check out Ente, Bitwarden for setting up MFA
            Create passwords with at least 12-15 characters
            Use passphrases instead of single words
            Using a Password Manager can help securely store and generate strong, unique passwords for each of your accounts - Check out Bitwarden, 1Password`
          }
          donts={
            `Use the same password for every account
            Don't use personal information or predictable information in your password.
            Don't share passwords via email or text messages
            Don't keep default passwords provided by services or devices`
          }
        />
      </div>


      <div className="row page-heading">
        {/* <div className="column" style={{ width: '50%', height: '80px', padding: '10%' }}>
          <Button variant="contained" color="primary"
            href="/best-practices"
            sx={{
              width: '100%', height: '100%', margin: '10px', padding: '10%', backgroundColor: '#687d31',
              '&:hover': { backgroundColor: '#5a6a2d' }
            }}>
            Click here to learn more about keeping yourself safe
          </Button>
        </div>
        <div className="column" style={{ width: '50%', height: '80px', padding: '10%' }}>
          <Button variant="contained" color="secondary"
            href="/tool"
            sx={{
              width: '100%', height: '100%', margin: '10px', padding: '10%', backgroundColor: '#687d31',
              '&:hover': { backgroundColor: '#5a6a2d' }
            }}>
            Click here to find out if you wanna understand the risk of a platform before signing up for it
          </Button>
        </div> */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '150px', flexWrap: 'wrap', padding: '20px' }}>
          <Card variant="outlined" sx={{ width: 450 }}>{card1}</Card>
          <Card variant="outlined" sx={{ width: 450 }}>{card2}</Card>
        </Box>
        
      </div>
      

    </div>
  );
}

export default LandingPage
