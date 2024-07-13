import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Switch directly from react-router-dom
import { Link } from 'react-router-dom';
import './navi.css'
import Home from '../Pages/Home';
import Wheretogo from '../Pages/Wheretogo';
import Whatotdo from '../Pages/Whatotdo';
import Aboutus from '../Pages/Aboutus';
import Signin from '../Pages/Sin';
import Signup from '../Pages/Sup';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"></link>

export default function NaviBox() {
  return (
    <Router>
      <div>
        <div className="naviBox">
          <div className="logo">
            <img src="" alt="Logo" /> 
          </div>
          <div className="tabs">
            <Link to="/">HOME</Link>
            <Link to="/wheretogo">Where to go</Link>
            <Link to="/whatotdo">What to do</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
        <Routes> {/* Use Routes component */}
          <Route path="/" element={<Home />} />
          <Route path="/wheretogo" element={<Wheretogo />} />
          <Route path="/whatotdo" element={<Whatotdo />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          {/* Define routes for other tabs */}
        </Routes>
      </div>
    </Router>
  );
}
