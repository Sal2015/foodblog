import React from 'react';
import './End.css'; // Import your CSS file for styling

const EndBar = () => {
  return (
    <div className="endbar" style={{ backgroundColor: '#CFD1DB', padding: '20px' }}>
      
      <div className="column">
        <img
          src="https://pinchofyum.com/wp-content/assets/images/cta/poy-ecookbook-2021.png"
          className="column-image"
          alt="Third Column Image"
        />
      </div>
      <div className="column"  >
        <h2 >Login for more personalized Content</h2>
        <p>Logging in is simple and secure. Enter your credentials, 
          and you’re all set to enjoy a personalized content experience
           designed to fit your unique preferences. Not a member yet? Sign up today 
           to unlock a world of tailored content and features</p>


      </div>

      
     
    </div>
  );
};

export default EndBar;
