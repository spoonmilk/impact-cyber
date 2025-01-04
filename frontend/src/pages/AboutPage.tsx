export const AboutPage = () => {
    return (
      <div className="page-container card-background">
        <div className="page-content">
          <h1 className="about-title">About Us</h1>
          <div className="story">
            <h2>Our Story</h2>
            <p>
                We believe everyone has the right to know how their data is used. 
                Too often, people sign up for services without understanding the risks to their 
                privacy and security. That’s why we created Soteria: to empower individuals with 
                clear, actionable insights about data usage.</p>
            <img
              src="../src/assets/aboutpic.jpg" /* Replace with your image URL */
              alt="Our Story Image"
              className="story-image"
            />
          </div>
  
          <div className="team">
            <h2>All Members</h2>
            <div className="team-members">
              <div className="member">
                <img src="../src/assets/Alex.png" alt="Member 1" />
                <h3>Alex Khosrowshahi</h3>
                <p>Software Developer</p>
              </div>
              <div className="member">
                <img src="../src/assets/Alana.png" alt="Member 2" />
                <h3>Alana Mackey</h3>
                <p>Researcher</p>
              </div>
              <div className="member">
                <img src="../src/assets/Devi.png" alt="Member 3" />
                <h3>Devi Sivakumar</h3>
                <p>Software Engineer</p>
              </div>
              <div className="member">
                <img src="../src/assets/Mari.png" alt="Member 4" />
                <h3>Mari Hirota</h3>
                <p>Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutPage;
  