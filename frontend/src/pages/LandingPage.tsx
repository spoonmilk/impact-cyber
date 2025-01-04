import React from 'react'
import '../css/LandingPage.css'
import { Typography } from '@mui/material';
import VignetteCard from '../components/VignetteCard';
import { Button, Card, CardContent, CardMedia } from '@mui/material';


export const LandingPage = () => {
  return (
    <div className="page-container card-background">
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
            '../src/assets/hacker.png',
          ]}
          dos={
            `Use unique passwords for every account you have. Try not to reuse passwords across multiple sites. If one account is compromised, others will remain secure. 
            Use Multi-factor authentication for all possible accounts
            Passphrases should be greater than 8 characters
            Use a Password Manager: Password managers like … can securely store and generate strong, unique passwords for each of your accounts, eliminating the need to remember them all.`
          }
          donts={
            `Have separate passwords for different accounts
            Use Multi-factor authentication for all possible accounts
            Passphrases should be greater than 8 characters`
          }
        />
      </div>


      <div className="row page-heading">
        <div className="column" style={{ width: '50%', height: '80px', padding: '10%' }}>
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
        </div>
      </div>



      {/* <div className="page-content">
        <Typography>Landing Page</Typography>
      </div>  */}
    </div>
  );
}

export default LandingPage
