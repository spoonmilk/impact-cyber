import React, { useState } from 'react';
import '../css/LandingPage.css'
import VignetteCard from '../components/VignetteCard';
import '../css/LandingPage.css'


export const BestPracticePage = () => {
  const [index, setIndex] = useState<Number>();

  
  const vignetteData = [
    {
      vishing: {
        text: 'The sun is just rising when Bala is awoken by the sharp chimes of her ringtone. Slowly she registers that it is 5 am and she is receiving a call from an unknown number. It could be a relative from a different timezone, or a friend whose number she forgot to save. she quickly picks up the call and a soft, professional voice greets her with a sense of urgency. The voice speaks quickly causing Bala to only hang on to the most urgent phrases in their speech, “unusual activity,” “bank account,” “safety,” “verification.”  The voice on the other end, calm and professional, claimed to be from a fraud investigation department and said there was unusual activity on her bank account. She was told to verify her account number and the last four digits of her social security number for security purposes. Trusting the urgency of the situation, she complied. When she woke up later, she noticed large, unfamiliar transactions on her account. Panic set in as she immediately called her bank, only to learn that the call had been a scam—vishing—where fraudsters impersonate trusted authorities to steal personal information. In the days that followed, she spent hours disputing the charges and reporting the fraud.',
        image: [
          '../src/assets/hacker.png',
          null, // No image for row 2
          '../src/assets/hacker.png',
        ],
        dos: "something",
        donts: "something",
      }
      
    },
    {
      socialengineering: {
        text: 'The sun is just rising when Bala is awoken by the sharp chimes of her ringtone. Slowly she registers that it is 5 am and she is receiving a call from an unknown number. It could be a relative from a different timezone, or a friend whose number she forgot to save. she quickly picks up the call and a soft, professional voice greets her with a sense of urgency. The voice speaks quickly causing Bala to only hang on to the most urgent phrases in their speech, “unusual activity,” “bank account,” “safety,” “verification.”  The voice on the other end, calm and professional, claimed to be from a fraud investigation department and said there was unusual activity on her bank account. She was told to verify her account number and the last four digits of her social security number for security purposes. Trusting the urgency of the situation, she complied. When she woke up later, she noticed large, unfamiliar transactions on her account. Panic set in as she immediately called her bank, only to learn that the call had been a scam—vishing—where fraudsters impersonate trusted authorities to steal personal information. In the days that followed, she spent hours disputing the charges and reporting the fraud.',
      image: [
        '../src/assets/hacker.png',
        null, // No image for row 2
        '../src/assets/hacker.png',
      ],
      dos: "something",
      donts: "something",
      }
      
    },
      {
        phishing: {
          text: 'The sun is just rising when Bala is awoken by the sharp chimes of her ringtone. Slowly she registers that it is 5 am and she is receiving a call from an unknown number. It could be a relative from a different timezone, or a friend whose number she forgot to save. she quickly picks up the call and a soft, professional voice greets her with a sense of urgency. The voice speaks quickly causing Bala to only hang on to the most urgent phrases in their speech, “unusual activity,” “bank account,” “safety,” “verification.”  The voice on the other end, calm and professional, claimed to be from a fraud investigation department and said there was unusual activity on her bank account. She was told to verify her account number and the last four digits of her social security number for security purposes. Trusting the urgency of the situation, she complied. When she woke up later, she noticed large, unfamiliar transactions on her account. Panic set in as she immediately called her bank, only to learn that the call had been a scam—vishing—where fraudsters impersonate trusted authorities to steal personal information. In the days that followed, she spent hours disputing the charges and reporting the fraud.',
          image: [
            '../src/assets/hacker.png',
            null, // No image for row 2
            '../src/assets/hacker.png',
          ],
          dos: "something",
          donts: "something",
        },
      },
    
    {
      socialmedia: {
        text: 'The sun is just rising when Bala is awoken by the sharp chimes of her ringtone. Slowly she registers that it is 5 am and she is receiving a call from an unknown number. It could be a relative from a different timezone, or a friend whose number she forgot to save. she quickly picks up the call and a soft, professional voice greets her with a sense of urgency. The voice speaks quickly causing Bala to only hang on to the most urgent phrases in their speech, “unusual activity,” “bank account,” “safety,” “verification.”  The voice on the other end, calm and professional, claimed to be from a fraud investigation department and said there was unusual activity on her bank account. She was told to verify her account number and the last four digits of her social security number for security purposes. Trusting the urgency of the situation, she complied. When she woke up later, she noticed large, unfamiliar transactions on her account. Panic set in as she immediately called her bank, only to learn that the call had been a scam—vishing—where fraudsters impersonate trusted authorities to steal personal information. In the days that followed, she spent hours disputing the charges and reporting the fraud.',
      image: [
        '../src/assets/hacker.png',
        null, // No image for row 2
        '../src/assets/hacker.png',
      ],
      dos: "something",
      donts: "something",
      }

      },
    {
      
        wifi: {
          text: "WiFi security content goes here...",
          image: [
            '../src/assets/hacker.png',
            null, // No image for row 2
            '../src/assets/hacker.png',
          ],
          dos: "something",
          donts: "something",
      
        }
      
    }

    
  ];

  // vishing: 'The sun is just rising when Bala is awoken by the sharp chimes of her ringtone. Slowly she registers that it is 5 am and she is receiving a call from an unknown number. It could be a relative from a different timezone, or a friend whose number she forgot to save. she quickly picks up the call and a soft, professional voice greets her with a sense of urgency. The voice speaks quickly causing Bala to only hang on to the most urgent phrases in their speech, “unusual activity,” “bank account,” “safety,” “verification.”  The voice on the other end, calm and professional, claimed to be from a fraud investigation department and said there was unusual activity on her bank account. She was told to verify her account number and the last four digits of her social security number for security purposes. Trusting the urgency of the situation, she complied. When she woke up later, she noticed large, unfamiliar transactions on her account. Panic set in as she immediately called her bank, only to learn that the call had been a scam—vishing—where fraudsters impersonate trusted authorities to steal personal information. In the days that followed, she spent hours disputing the charges and reporting the fraud.',
  //   socialengineering: 'You get a call from someone claiming to be from the dealership where you bought your car. They say they need to confirm your personal details to process insurance paperwork before the holidays, warning of delays if you don’t act quickly. They ask for your address, driver’s license number, and the last four digits of your Social Security number. Something feels off, so you hang up and call the dealership directly. It turns out, it was a scam.',
  //   phishing: 'You’re at work, scrolling through emails, when one catches your eye: “Urgent: Account Verification Needed.” It’s from your bank—or so it seems. The email warns of “suspicious activity” and urges you to confirm your account details immediately. You click the link, landing on what looks like your bank’s login page. Panic fuels your haste as you prepare to type your credentials. But then, something feels off. The URL isn’t quite right—subtly different from the official site. Realization hits you like a jolt. You’ve nearly fallen for a phishing scam.',
  //   socialmedia: 'You’re chatting with a friend about planning a European holiday, laughing over destinations like Paris and Rome. Afterward, you relax at home and scroll through Instagram. Suddenly, your feed is flooded with European travel reels—picturesque cafes, Christmas markets, and views of Santorini. Puzzled, you notice ads for travel agencies and winter coats. A thought creeps in: Was my phone listening to us?',
  //   wifi: 'WiFi security content goes here...'

    const [selectedVignette, setSelectedVignette] = useState<string | null>(null);
  
    // Handle button click to change vignette content
    const handleButtonClick = (vignette: string) => {
      setSelectedVignette(vignette);
      console.log(vignetteData);
      console.log(selectedVignette);
    };

    return (
      <div className="relative">
        {/* Floating Buttons */}
        <div className="floating-buttons">
          <button
            className="floating-button"
            onClick={() => handleButtonClick('vishing')}
          >
            Vishing
          </button>
          <button
            className="floating-button"
            onClick={() => handleButtonClick('socialengineering')}
          >
            Social Engineering
          </button>
          <button
            className="floating-button"
            onClick={() => handleButtonClick('phishing')}
          >
            Phishing
          </button>
          <button
            className="floating-button"
            onClick={() => handleButtonClick('socialmedia')}
          >
            Social Media
          </button>
          <button
            className="floating-button"
            onClick={() => handleButtonClick('wifi')}
          >
            WiFi
          </button>
        </div>
  
        {/* The vignette-wrapper will change based on the selectedVignette */}
        {/* <div className="vignette-wrapper">
          {selectedVignette!==null ? 'vignetteData[selectedVignette] ': 'Select a category to view privacy suggestions'}
        </div> */}

        <div className="vignette-wrapper">
          {selectedVignette && vignetteData[selectedVignette] ? vignetteData[selectedVignette] : 'Select a category to view privacy suggestions'}
        </div>

        {selectedVignette && (
          <VignetteCard text={vignetteData[selectedVignette].text} images={[
            '../src/assets/hacker.png',
            null, // No image for row 2
            '../src/assets/hacker.png',
          ]} dos={vignetteData[selectedVignette].dos} donts={vignetteData[selectedVignette].donts} ></VignetteCard>
        )}

      </div>
    );

      // return (
      //   <div className="page-container card-background">
      //       <div className="page-content">
      //           <div>BestPactice</div>
      //           <div className="page-heading">
      //               <div className="row">
      //                 <img
      //                   src="../src/assets/GoogleBreach.png"
      //                   alt="Placeholder"
      //                   className="column-image"
      //                 />
      //               </div>
      //               <div className="row">
      //                 <Typography variant="h2" component="h2" align="center" className="poster-text" gutterBottom>
      //                   Why should <br />I care?
      //                 </Typography>
      //               </div>
      //           </div>

      //            {/* floating buttons */}
      //             <div>
      //             <Button variant="contained">Vishing</Button>
      //             <Button variant="contained">Phishing</Button>
      //             <Button variant="contained">Social Engineering</Button>
      //             <Button variant="contained">Social Media</Button>
      //             <Button variant="contained">Wifi</Button>
      //             </div>

      //           <div className="vignette-wrapper">
      //             {/* <Typography>Row 2 - Single Column</Typography> */}
            
      //             <VignetteCard text={
      //               `It’s 2024, and another Google breach makes the headlines. You read the headline quickly, barely glancing at the details. Another breach. Another day. You scroll past, figuring it's just the usual drama. Google’s a giant, after all. They’ve got the resources to handle it, right?
      //               You trust them—why wouldn’t you? They’ve been a part of your life for years: Gmail, Drive, Calendar. It all just works. You’ve got nothing to hide, and surely, Google knows how to keep things safe. After all, it’s not like anyone would want your data anyway.
      //               But then, a few days later, a strange email pops up in your indiv. It’s a warning from your bank: suspicious login attempts, from a device you don’t recognize.`}
      //               // imageUrl="../src/assets/hacker.png"
      //               images={[
      //                 '../src/assets/hacker.png', // Image for row 1
      //                 null, // No image for row 2
      //                 '../src/assets/hacker.png', // Image for row 3
      //               ]}
      //             />
      //           </div>

      //       </div>
      //   </div>
      // )
}



export default BestPracticePage
