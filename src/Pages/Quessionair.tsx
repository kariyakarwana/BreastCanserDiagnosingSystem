import React from 'react';
import './Quessionair.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1>Title</h1>
          <nav>
            <a href="#home">Home</a>
            <a href="#product">Product</a>
            <a href="#doctors">Doctors</a>
            <a href="#hospitals">Hospitals</a>
          </nav>
          <div className="auth-buttons">
            <button>Login</button>
            <button>Sign up</button>
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="container">
          <h2>Find About Your Self</h2>
          <p>Problems trying to resolve the conflict between the two major realms of Classical Physics: Newtonian mechanics</p>
          <img src="https://cdn.shopify.com/s/files/1/1065/6316/files/thirdpartytested_large.jpg?v=1487710206" alt="Scientist" />
        </div>
      </section>

      <section className="follow-section">
        <div className="container">
          <h2>Follow a Questionnaire or Mammography Test</h2>
          <p>Problems trying to resolve the conflict between the two major realms of Classical Physics: Newtonian mechanics</p>
          <div className="card">
            <img src="https://aafiyat.ca/wp-content/uploads/2023/01/Untitled-2.png" alt="Doctor" />
            <p>Questionnaire</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-section">
            <h4>Company Info</h4>
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <p>About Us</p>
            <p>We are hiring</p>
          </div>
          <div className="footer-section">
            <h4>Features</h4>
            <p>Business Marketing</p>
            <p>User Analytic</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <p>IOS & Android</p>
            <p>Watch a Demo</p>
            <p>Customers</p>
            <p>API</p>
          </div>
          <div className="footer-section">
            <h4>Get In Touch</h4>
            <p>Phone: (460) 555-0101</p>
            <p>Address: 4517 Washington Ave. Manchester, Kentucky 39495</p>
            <p>Email: debra.holt@example.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Made With Love By Figmaland All Right Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
