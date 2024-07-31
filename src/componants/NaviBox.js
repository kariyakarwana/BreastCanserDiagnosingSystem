import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './navi.css';
import Home from '../Pages/Home';
import Awareness from '../Pages/Awareness';
import Whatotdo from '../Pages/Whatotdo';
import Suwanari from '../Pages/Suwanari';
import Signin from '../Pages/Sin';
import Signup from '../Pages/Sup';

export default function NaviBox() {
  return (
    <Router>
      <div>
        <div className="naviBox">
        <div className="logo">
            <img src="path/to/your/logo.png" alt="Logo" /> {/* Provide the correct path to your logo */}
          </div>
          <div className="tabs">
            <Link to="/">HOME</Link>
            <Link to="/awareness">Awareness</Link>
            <Link to="/whatotdo">Self Assessment</Link>
            <Link to="/suwanari">Suwanari</Link>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
          
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/whatotdo" element={<Whatotdo />} />
          <Route path="/suwanari" element={<Suwanari />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}
