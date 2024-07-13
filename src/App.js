import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef } from 'react'
import NaviBox from './componants/NaviBox';
import Home from './Pages/Home';

function App() {
  const images = ['/path/to/image1.jpg', '/path/to/image2.jpg', '/path/to/image3.jpg']; // Array of image paths
  const imageIndexRef = useRef(0); // Reference to keep track of the current image index

  // Function to update background image
  const updateBackgroundImage = () => {
    const backgroundImage = `url(${images[imageIndexRef.current]})`;
    document.body.style.backgroundImage = backgroundImage;
    imageIndexRef.current = (imageIndexRef.current + 1) % images.length; // Increment index and loop back to the start
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
  return (
    <div className="App">
      <NaviBox/>


    </div>
  );
}

export default App;
