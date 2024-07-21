import React from 'react';
import './End.css'; // Import your CSS file for styling

const End = () => {
  return (
    <div className="three-column-container">
      
      <div className="column">
        <h2>Meet This Months Trending Chef..</h2>
        <p>With a career marked by creativity and dedication, he has captivated diners globally through their distinctive dishes that evoke both nostalgia and exploration. From humble beginnings to culinary stardom, their journey is a testament to perseverance and a deep-seated love for food.

</p>
      </div>

     
      <div className="column">
        <img
          src="https://cdn.dribbble.com/userupload/4511076/file/original-8930eeb8aef8831132c1fb666f3d1bd9.png?resize=400x0"
          className="column-image"
          alt="Second Column Image"
        />
      </div>

      {/* Third Column - Image */}
      <div className="column">
        <img
          src="https://res.cloudinary.com/enchanting/q_90,f_auto,c_lfill,w_400,h_300/enchanting-web/2023/09/Chef-preparing-seafood-ceviche-on-wooden-table-shutterstock_567660568.jpg"
          className="column-image"
          alt="Third Column Image"
        />
      </div>
    </div>
  );
};

export default End;
