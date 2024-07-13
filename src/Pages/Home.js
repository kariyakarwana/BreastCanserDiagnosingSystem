import React, { useEffect, useRef } from 'react'
import './home.css';
import carImage from '../images/mouse.png';


export default function Home() {
  const images = ['../images/car.jpg', '../images/car.jpg', '../images/car.jpg']; // Array of image paths
  const imageIndexRef = useRef(0); // Reference to keep track of the current image index

  // Function to update background image
  const updateBackgroundImage = () => {
    const backgroundImage = `url(${images[imageIndexRef.current]})`;
    document.body.style.backgroundImage = backgroundImage;
    imageIndexRef.current = (imageIndexRef.current + 1) % images.length;
  };

  // Use useEffect to start the slideshow when the component mounts
  useEffect(() => {
    // Update background image initially
    updateBackgroundImage();

    // Set interval to update background image every 5 seconds
    const interval = setInterval(updateBackgroundImage, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, );
  //dependecy is empty
  return (
    <div className='home'>
        <h1>This is home Page</h1>
        <img src="./src/images/car.jpg" alt='car'/>
        <div className="h-content">
        {/* Your content here */}
      </div>
      <div className="blur-box">
        <div className="blur-box-content">
          <div className="left-content">
            <p>Discover the complexities of cancer and its impact on health with our informative website. <br />Gain a brief understanding of this disease and its implications.</p>
          </div>
          <div className="right-content">
            <img src={carImage} alt="Car" style={{ width: '15%', height: 'auto' }} />
          </div>
        </div>
        <hr className="separator" />
      </div>
    </div>
  )
}
