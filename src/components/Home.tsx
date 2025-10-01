import React from 'react';
import './Home.css';
import profileImage from '../assets/home.jpg';

const Home: React.FC = () => {
  return (
    <div id="home" className="home-container"> 
      <div className="content-box">
        
       
        <div className="image-section">
          <div className="rounded-image-wrapper">
            <img 
              src={profileImage} 
              alt="Group of people looking into the distance"
              className="group-image"
            />
          </div>
        </div>
        
        
        <div className="info-section">
          
          
          <div className="text-container">
            <p className="welcome-text">Welcome</p>
            <h1 className="name-text">I'm Chester</h1>
            <p className="welcome-text">3rd Year Information Technology Student</p>
          </div>
          
           
          <a href="#about" className="learn-more-button">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;