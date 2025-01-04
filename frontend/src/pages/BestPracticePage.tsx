import React, { useState } from 'react';
import '../css/LandingPage.css'
import VignetteCard from '../components/VignetteCard';
import '../css/LandingPage.css'


export const BestPracticePage = () => {
  const [index, setIndex] = useState<Number>();


  // const vignetteData = [
  //   {
  //     vishing: {
  //       text: 'The sun is just rising when Bala is awoken by the sharp chimes of her ringtone. Slowly she registers that it is 5 am and she is receiving a call from an unknown number. It could be a relative from a different timezone, or a friend whose number she forgot to save. she quickly picks up the call and a soft, professional voice greets her with a sense of urgency. The voice speaks quickly causing Bala to only hang on to the most urgent phrases in their speech, “unusual activity,” “bank account,” “safety,” “verification.”  The voice on the other end, calm and professional, claimed to be from a fraud investigation department and said there was unusual activity on her bank account. She was told to verify her account number and the last four digits of her social security number for security purposes. Trusting the urgency of the situation, she complied. When she woke up later, she noticed large, unfamiliar transactions on her account. Panic set in as she immediately called her bank, only to learn that the call had been a scam—vishing—where fraudsters impersonate trusted authorities to steal personal information. In the days that followed, she spent hours disputing the charges and reporting the fraud.',
  //       image: [
  //         '../src/assets/hacker.png',
  //         null, // No image for row 2
  //         '../src/assets/hacker.png',
  //       ],
  //       dos: "something",
  //       donts: "something",
  //     }

  //   },
  //   {
  //     socialengineering: {
  //       text: 'The sun is just rising when Bala is awoken by the sharp chimes of her ringtone. Slowly she registers that it is 5 am and she is receiving a call from an unknown number. It could be a relative from a different timezone, or a friend whose number she forgot to save. she quickly picks up the call and a soft, professional voice greets her with a sense of urgency. The voice speaks quickly causing Bala to only hang on to the most urgent phrases in their speech, “unusual activity,” “bank account,” “safety,” “verification.”  The voice on the other end, calm and professional, claimed to be from a fraud investigation department and said there was unusual activity on her bank account. She was told to verify her account number and the last four digits of her social security number for security purposes. Trusting the urgency of the situation, she complied. When she woke up later, she noticed large, unfamiliar transactions on her account. Panic set in as she immediately called her bank, only to learn that the call had been a scam—vishing—where fraudsters impersonate trusted authorities to steal personal information. In the days that followed, she spent hours disputing the charges and reporting the fraud.',
  //     image: [
  //       '../src/assets/hacker.png',
  //       null, // No image for row 2
  //       '../src/assets/hacker.png',
  //     ],
  //     dos: "something",
  //     donts: "something",
  //     }

  //   },
  //     {
  //       phishing: {
  //         text: 'The sun is just rising when Bala is awoken by the sharp chimes of her ringtone. Slowly she registers that it is 5 am and she is receiving a call from an unknown number. It could be a relative from a different timezone, or a friend whose number she forgot to save. she quickly picks up the call and a soft, professional voice greets her with a sense of urgency. The voice speaks quickly causing Bala to only hang on to the most urgent phrases in their speech, “unusual activity,” “bank account,” “safety,” “verification.”  The voice on the other end, calm and professional, claimed to be from a fraud investigation department and said there was unusual activity on her bank account. She was told to verify her account number and the last four digits of her social security number for security purposes. Trusting the urgency of the situation, she complied. When she woke up later, she noticed large, unfamiliar transactions on her account. Panic set in as she immediately called her bank, only to learn that the call had been a scam—vishing—where fraudsters impersonate trusted authorities to steal personal information. In the days that followed, she spent hours disputing the charges and reporting the fraud.',
  //         image: [
  //           '../src/assets/hacker.png',
  //           null, // No image for row 2
  //           '../src/assets/hacker.png',
  //         ],
  //         dos: "something",
  //         donts: "something",
  //       },
  //     },

  //   {
  //     socialmedia: {
  //       text: 'The sun is just rising when Bala is awoken by the sharp chimes of her ringtone. Slowly she registers that it is 5 am and she is receiving a call from an unknown number. It could be a relative from a different timezone, or a friend whose number she forgot to save. she quickly picks up the call and a soft, professional voice greets her with a sense of urgency. The voice speaks quickly causing Bala to only hang on to the most urgent phrases in their speech, “unusual activity,” “bank account,” “safety,” “verification.”  The voice on the other end, calm and professional, claimed to be from a fraud investigation department and said there was unusual activity on her bank account. She was told to verify her account number and the last four digits of her social security number for security purposes. Trusting the urgency of the situation, she complied. When she woke up later, she noticed large, unfamiliar transactions on her account. Panic set in as she immediately called her bank, only to learn that the call had been a scam—vishing—where fraudsters impersonate trusted authorities to steal personal information. In the days that followed, she spent hours disputing the charges and reporting the fraud.',
  //     image: [
  //       '../src/assets/hacker.png',
  //       null, // No image for row 2
  //       '../src/assets/hacker.png',
  //     ],
  //     dos: "something",
  //     donts: "something",
  //     }

  //     },
  //   {

  //       wifi: {
  //         text: "WiFi security content goes here...",
  //         image: [
  //           '../src/assets/hacker.png',
  //           null, // No image for row 2
  //           '../src/assets/hacker.png',
  //         ],
  //         dos: "something",
  //         donts: "something",

  //       }

  //   }


  // ];

  const vignetteData: Record<string, { text: string; image: (string | null)[]; dos: string; donts: string }> = {
    vishing: {
      text: 'The sun is just rising when Bala is awoken by the sharp chimes of her ringtone...',
      image: ['../src/assets/hacker.png', null, '../src/assets/hacker.png'],
      dos: 'something',
      donts: 'something',
    },
    socialengineering: {
      text: 'The sun is just rising when Bala is awoken by the sharp chimes of her ringtone...',
      image: ['../src/assets/hacker.png', null, '../src/assets/hacker.png'],
      dos: 'something',
      donts: 'something',
    },
    phishing: {
      text: 'The sun is just rising when Bala is awoken by the sharp chimes of her ringtone...',
      image: ['../src/assets/hacker.png', null, '../src/assets/hacker.png'],
      dos: 'something',
      donts: 'something',
    },
    socialmedia: {
      text: 'The sun is just rising when Bala is awoken by the sharp chimes of her ringtone...',
      image: ['../src/assets/hacker.png', null, '../src/assets/hacker.png'],
      dos: 'something',
      donts: 'something',
    },
    wifi: {
      text: 'WiFi security content goes here...',
      image: ['../src/assets/hacker.png', null, '../src/assets/hacker.png'],
      dos: 'something',
      donts: 'something',
    },
  };


  // vishing: 'The sun is just rising when Bala is awoken by the sharp chimes of her ringtone. Slowly she registers that it is 5 am and she is receiving a call from an unknown number. It could be a relative from a different timezone, or a friend whose number she forgot to save. she quickly picks up the call and a soft, professional voice greets her with a sense of urgency. The voice speaks quickly causing Bala to only hang on to the most urgent phrases in their speech, “unusual activity,” “bank account,” “safety,” “verification.”  The voice on the other end, calm and professional, claimed to be from a fraud investigation department and said there was unusual activity on her bank account. She was told to verify her account number and the last four digits of her social security number for security purposes. Trusting the urgency of the situation, she complied. When she woke up later, she noticed large, unfamiliar transactions on her account. Panic set in as she immediately called her bank, only to learn that the call had been a scam—vishing—where fraudsters impersonate trusted authorities to steal personal information. In the days that followed, she spent hours disputing the charges and reporting the fraud.',
  //   socialengineering: 'You get a call from someone claiming to be from the dealership where you bought your car. They say they need to confirm your personal details to process insurance paperwork before the holidays, warning of delays if you don’t act quickly. They ask for your address, driver’s license number, and the last four digits of your Social Security number. Something feels off, so you hang up and call the dealership directly. It turns out, it was a scam.',
  //   phishing: 'You’re at work, scrolling through emails, when one catches your eye: “Urgent: Account Verification Needed.” It’s from your bank—or so it seems. The email warns of “suspicious activity” and urges you to confirm your account details immediately. You click the link, landing on what looks like your bank’s login page. Panic fuels your haste as you prepare to type your credentials. But then, something feels off. The URL isn’t quite right—subtly different from the official site. Realization hits you like a jolt. You’ve nearly fallen for a phishing scam.',
  //   socialmedia: 'You’re chatting with a friend about planning a European holiday, laughing over destinations like Paris and Rome. Afterward, you relax at home and scroll through Instagram. Suddenly, your feed is flooded with European travel reels—picturesque cafes, Christmas markets, and views of Santorini. Puzzled, you notice ads for travel agencies and winter coats. A thought creeps in: Was my phone listening to us?',
  //   wifi: 'WiFi security content goes here...'

  const [selectedVignette, setSelectedVignette] = useState<string>("vishing");

  // Handle button click to change vignette content
  const handleButtonClick = (vignette: string) => {
    setSelectedVignette(vignette);
    console.log(vignetteData);
    console.log(selectedVignette);
  };

  return (
    <div className="page-container card-background">
      {/* Floating Buttons */}
      <div className='row'>
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
      </div>

      {/* VignetteCard */}
      <div className="vignette-wrapper">
        {selectedVignette && (
          <VignetteCard
            text={vignetteData[selectedVignette].text}
            images={vignetteData[selectedVignette].image}
            dos={vignetteData[selectedVignette].dos}
            donts={vignetteData[selectedVignette].donts}
          />
        )}
        {!selectedVignette && (
          <p>Select a category to view best practices and privacy suggestions.</p>
        )}
      </div>

    </div>
  );
}



export default BestPracticePage
