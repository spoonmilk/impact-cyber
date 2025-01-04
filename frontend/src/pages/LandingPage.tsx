import React from 'react'
import '../css/LandingPage.css'
import { Typography } from '@mui/material';
import VignetteCard from '../components/VignetteCard';
import { Card, CardContent, CardMedia } from '@mui/material';


export const LandingPage = () => {
  return (
    <div className="page-container card-background">
      <div className="page-heading">
        <div className="row">
          <img
            src="../src/assets/GoogleBreach.png"
            alt="Placeholder"
            className="column-image"
          />
        </div>
        <div className="row">
          <Typography variant="h2" component="h2" align="center" className="poster-text" gutterBottom>
            Why should <br />I care?
          </Typography>
        </div>
      </div>

      <div className="vignette-wrapper">
        {/* <Typography>Row 2 - Single Column</Typography> */}
        
        <VignetteCard text={
          `It’s 2024, and another Google breach makes the headlines. You read the headline quickly, barely glancing at the details. Another breach. Another day. You scroll past, figuring it's just the usual drama. Google’s a giant, after all. They’ve got the resources to handle it, right?
You trust them—why wouldn’t you? They’ve been a part of your life for years: Gmail, Drive, Calendar. It all just works. You’ve got nothing to hide, and surely, Google knows how to keep things safe. After all, it’s not like anyone would want your data anyway.
But then, a few days later, a strange email pops up in your indiv. It’s a warning from your bank: suspicious login attempts, from a device you don’t recognize.`}
          // imageUrl="../src/assets/hacker.png"
          images={[
            '../src/assets/hacker.png', // Image for row 1
            null, // No image for row 2
            '../src/assets/hacker.png', // Image for row 3
          ]}
          />
      </div>




      {/* Row 3 with two columns */}
      <div className="row">
        <div className="column">
          <Typography>Column 1 - Row 3</Typography>
        </div>
        <div className="column">
          <Typography>Column 2 - Row 3</Typography>
        </div>
      </div>



      <div className="page-content">
        <Typography>Landing Page</Typography>
      </div>
    </div>
  );
  // return (
  //   <div className="page-container">
  //     <div className='title'>
  //       WHY SHOULD I CARE?
  //     </div>
  //     <h1>
  //     WHY?
  //     </h1>
  //     <div className="page-content">

  //       <div>Landing Page</div>
  //     </div>
  //   </div>
  // )
}

export default LandingPage
