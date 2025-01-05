import React, { useState } from 'react';
import '../css/LandingPage.css'
import VignetteCard from '../components/VignetteCard';
import '../css/LandingPage.css'


export const BestPracticePage = () => {
  const [index, setIndex] = useState<Number>();

  const vignetteData: Record<string, { text: string; image: (string | null)[]; dos: string; donts: string }> = {
    vishing: {
      text: `At 5 am, Bala is jolted awake by her ringtone. 
      An unknown caller, claiming to be from a fraud investigation department, warns of unusual activity on her bank account. 
      Urged to act quickly, Bala shares sensitive information like her account number and part of her Social Security number. 
      Later, she discovers large unauthorized transactions. 
      Realizing it was a phone call scam otherwise known as "vishing", she contacts her bank in panic and spends days disputing charges and reporting the fraud.`,
      image: ['../src/assets/telephone.png', null, '../src/assets/vishingHook.png'],
      dos: 
        `Verify caller identity. If you are unsure if a call is legitimate hang up and call the institution directly. 
        Beware of urgency tactics. Scammers often attempt to create a sense of urgency in order to exploit emotion, but legitimate institutions will always give you time for verification. 
        Limit who has your phone number by removing your contact information from services you no longer use. You can do this by signing up for the national do not call registry will`,
      donts: 
        `Do not answer calls from unknown numbers, allow them to go to voicemail.
        Do not provide personal information over the phone, especially if you did not initiate the call. Legitimate institutions will never ask for sensitive details this way.`,
    },
    socialengineering: {
      text: `
      You get a call from someone claiming to be from the dealership where you bought your car. They say they need to confirm your personal details to process insurance paperwork before the holidays, warning of delays if you don’t act quickly.
      They ask for your address, driver’s license number, and the last four digits of your Social Security number. 
      Something feels off, so you hang up and call the dealership directly. It turns out, it was a scam. 
      `,
      image: ['../src/assets/socialEngineering.png', null, '../src/assets/scam.png'],
      dos: `Slow down. When facing any requests for personal information, slow down, know there is no sense of urgency and critically evaluate the request.
            Monitor accounts. If you accidentally shared any information, monitor your bank and credit accounts for unusual activity. Consider placing a fraud alert or freeze on your credit file.`,
      donts: `Do not provide sensitive information over the phone, especially if you did not initiate the call. Legitimate institutions will never ask for sensitive details this way.
              Don’t Hesitate to Hang Up. If something feels off, trust your instincts. You can always verify the situation later by contacting the organization directly.`,
    },
    phishing: {
      text: `
      You’re at work, scrolling through emails, when one catches your eye: “Urgent: Account Verification Needed.” It’s from your bank—or so it seems. The email warns of “suspicious activity” and urges you to confirm your account details immediately. 
      You click the link, landing on what looks like your bank’s login page. Panic fuels your haste as you prepare to type your credentials. But then, something feels off. The URL isn’t quite right—subtly different from the official site. Realization hits you like a jolt. 
      You’ve nearly fallen for a phishing scam. 
      `,
      image: ['../src/assets/emailPhishing.png', null, '../src/assets/unlock.png'],
      dos: `Educate Yourself About Phishing Tactics. Read stories like the ones above to familiarize yourself with up to date phishing tactics.
            Verify Email Sources. Carefully check the sender's email address. To do this, hover over links before clicking them to check if the URL matches the official website.`,
      donts: `Click on links from unverified sources. Avoid clicking on links or downloading attachments from unknown or unexpected sources, especially if the email seems urgent or too good to be true.
              Neglect software updates. Don’t delay updates or patches. These updates often fix security holes that individuals can exploit.`,
    },
    socialmedia: {
      text: `
      You’re chatting with a friend about planning a European holiday, laughing over destinations like Paris and Rome. 
      Afterward, you relax at home and scroll through Instagram. 
      Suddenly, your feed is flooded with European travel reels—picturesque cafes, Christmas markets, and views of Santorini. Puzzled, you notice ads for travel agencies and winter coats. 
      A thought creeps in: Was my phone listening to us?
      `,
      image: ['../src/assets/talking.png', null, '../src/assets/media.png'],
      dos: `Set your profile to private
      Accept Friend/Follow Requests only from people you know
      Misinformation, scams, and fake news are rampant on social media. Be skeptical of anything that seems too good to be true. 
      Always update your social media apps and devices so that you’re up-to-date with the latest security updates.`,
      donts: `Avoid posting too much about your personal life, such as travel plans, family matters, or financial details. Scammers can use this information to target you.`,
    },
    wifi: {
      text: `At a coffee shop, you connect to free public Wi-Fi to check your bank account. 
      Everything seems normal as you log in, but you don’t realize someone nearby is intercepting your connection through a fake Wi-Fi hotspot.
      Later, you get a notification about suspicious transactions. It dawns on you—the public Wi-Fi wasn’t safe, and your login details were stolen.
      `,
      image: ['../src/assets/wifi.png', null, '../src/assets/phoneAlert.png'],
      dos: `Turn off autconnect to public wifi in your phone settings.
      Use a VPN (Virtual Private Network) to keep your information hidden and safe. Check out - Proton VPN.`,
      donts: `Do not to check your bank information or any other sensitive information when on public Wi-Fi. Wait until you're on a secure network.
      Do not connect to Wi-Fi networks you don't recognize.
      Do not share your files or printer on public WiFi`,
    },
  };

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
