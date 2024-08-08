import React from 'react';
import './HomePage.css';

const Home = () => {
  return (
    <div className="home-container">
      <main className="main-content">
        <section className="welcome-section">
          <h1>Welcome to Your Life Insurance Portal</h1>
          <p>Secure your future with our personalized insurance plans.</p>
        </section>

        <section className="dashboard-section">
          <div className="dashboard-card">
            <h2>My Dashboard</h2>
            <p>Personalized policy details and more.</p>
          </div>
          <div className="dashboard-card">
            <h2>Health Assessment Tools</h2>
            <p>Get personalized health assessments and tips.</p>
          </div>
          <div className="dashboard-card">
            <h2>Wellness Programs</h2>
            <p>Participate in programs for better health and rewards.</p>
          </div>
        </section>

        <section className="features-section">
          <div className="feature-card">
            <h3>AI Chatbot Assistance</h3>
            <p>Ask our AI chatbot for help anytime.</p>
          </div>
          <div className="feature-card">
            <h3>Investment & Savings</h3>
            <p>Explore investment-linked plans and saving opportunities.</p>
          </div>
          <div className="feature-card">
            <h3>Family Coverage Plans</h3>
            <p>Extend coverage to your loved ones.</p>
          </div>
        </section>

        <section className="additional-info">
          <div className="info-card">
            <h4>Life Events & Coverage Adjustment</h4>
            <p>Adjust your coverage as your life changes.</p>
          </div>
          <div className="info-card">
            <h4>Interactive Claims Process</h4>
            <p>File and track claims with ease.</p>
          </div>
          <div className="info-card">
            <h4>Community Stories & Testimonials</h4>
            <p>Read stories from our satisfied customers.</p>
          </div>
          <div className="info-card">
            <h4>Sustainability Initiatives</h4>
            <p>Learn about our efforts to protect the environment.</p>
          </div>
        </section>

        <section className="latest-news">
          <h2>Latest News</h2>
          <div className="news-card">
            <h3>Industry Updates</h3>
            <p>Stay informed with the latest news in the insurance industry.</p>
          </div>
          <div className="news-card">
            <h3>Company Announcements</h3>
            <p>Read the latest announcements from our company.</p>
          </div>
        </section>

        <section className="resource-center">
          <h2>Resource Center</h2>
          <div className="resource-card">
            <h3>Articles & Guides</h3>
            <p>Explore articles and guides to help you understand your policy better.</p>
          </div>
          <div className="resource-card">
            <h3>FAQs</h3>
            <p>Find answers to the most frequently asked questions.</p>
          </div>
        </section>

        <section className="customer-support">
          <h2>Customer Support</h2>
          <div className="support-card">
            <h3>Contact Us</h3>
            <p>Reach out to our support team for assistance.</p>
          </div>
          <div className="support-card">
            <h3>Support Options</h3>
            <p>Explore various support options available to you.</p>
          </div>
        </section>

        <section className="upcoming-events">
          <h2>Upcoming Events</h2>
          <div className="event-card">
            <h3>Webinars</h3>
            <p>Join our upcoming webinars to learn more about our services.</p>
          </div>
          <div className="event-card">
            <h3>Seminars</h3>
            <p>Attend our seminars to get in-depth knowledge about insurance.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
