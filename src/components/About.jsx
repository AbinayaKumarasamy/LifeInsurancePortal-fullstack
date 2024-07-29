import React from 'react';
import './About.css';
import trump from '../assets/trump.jpg'
import modi from '../assets/modi.jpg'
const AboutUs = () => {
  return (
    <div className="about-container">

      <main className="main-content">
        <section className="intro-section">
          <h1>About Us</h1>
          <p>We are dedicated to providing the best life insurance solutions to secure your future.</p>
        </section>

        <section className="history-section">
          <h2>Our History</h2>
          <p>Founded in 1990, our company has grown to become a leading provider of life insurance. Over the past three decades, we have helped millions of families secure their financial future.</p>
        </section>

        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>Our mission is to provide reliable and comprehensive life insurance products that meet the diverse needs of our clients. We strive to ensure peace of mind and financial security for every policyholder.</p>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Integrity:</strong> We operate with the highest standards of ethics and transparency.</li>
            <li><strong>Customer Focus:</strong> Our clients are at the heart of everything we do.</li>
            <li><strong>Innovation:</strong> We continuously seek to improve our products and services.</li>
            <li><strong>Excellence:</strong> We are committed to excellence in every aspect of our business.</li>
            <li><strong>Community:</strong> We give back to the communities we serve through various initiatives.</li>
          </ul>
        </section>

        <section className="team-section">
          <h2>Our Team</h2>
          <p>Our team consists of experienced professionals who are passionate about helping you secure your future. Meet the people who make our company great:</p>
          <div className="team-members">
            <div className="team-member">
            <img src={modi} alt="member1" />
              <h3>John Doe</h3>
              <p>CEO</p>
            </div>
            <div className="team-member">
            <img src={trump} alt="member1" />
              <h3>Donald Trump</h3>
              <p>Chief Financial Officer</p>
            </div>
            <div className="team-member">
            <img src={trump} alt="member1" />
              <h3>Sam Johnson</h3>
              <p>Head of Customer Service</p>
            </div>
          </div>
        </section>
      </main>
      
     
    </div>
  );
};

export default AboutUs;
