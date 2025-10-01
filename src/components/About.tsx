import React from 'react';
import './About.css';  
import profileImage from '../assets/about.jpg';  

const About: React.FC = () => {
  return (
    <div id="about" className="about-container">
      
      <h2 className="about-title">
        About Me
        <span className="title-underline"></span>  
      </h2>

      
      <div className="about-main-content">
         
        <div className="about-text-box">
          <p className="about-greeting">Hello, my name is</p>
          <h1 className="about-name">Chester Marasigan</h1>
          <p className="about-role">An Information Technology Student</p>
        </div>

         
        <div className="about-image-section">
          <div className="about-image-wrapper">
            <img 
              src={profileImage} 
              alt="Chester Marasigan and others looking into the distance"
              className="about-profile-img"
            />
          </div>
        </div>
      </div>

      
      <div className="about-info-box">
        <p>I was born on July 31, 2004 here in Romblon, Romblon. I am currently residing at Logbon Island. I am now a third year student at Romblon State University - Romblon Campus taking Bachelor of Science in Information Technology.</p>
      </div>
    </div>
  );
};

export default About;