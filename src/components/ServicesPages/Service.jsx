import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaLifeRing, FaShieldAlt, FaUserShield, FaHeartbeat, FaGlobe, FaDollarSign } from 'react-icons/fa';
import './Service.css';

const services = [
  {
    icon: <FaLifeRing />,
    title: 'Term Life Insurance',
    description: 'Affordable and flexible life insurance plans to protect your loved ones financially.',
    link: '/TermLifeInsurance'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Whole Life Insurance',
    description: 'Permanent coverage with fixed premiums and cash value accumulation.',
    link: '/WholeLifeInsurance'
  },
  {
    icon: <FaUserShield />,
    title: 'Universal Life Insurance',
    description: 'Flexible policies that combine life insurance with investment options.',
    link: '/UniversalLifeInsurance'
  },
  {
    icon: <FaHeartbeat />,
    title: 'Health Insurance',
    description: 'Comprehensive health insurance plans for individuals and families.',
    link: '/HealthInsurance'
  },
  {
    icon: <FaGlobe />,
    title: 'Global Coverage',
    description: 'Life insurance plans that provide coverage worldwide.',
    link: '/GlobalCoverage'
  },
  {
    icon: <FaDollarSign />,
    title: 'Investment Plans',
    description: 'Secure your future with our diverse investment plans tailored to your needs.',
    link: '/InvestmentPlans'
  }
];

const Service = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/display');
  };

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <div className="service-container">
      <header className="service-header">
        <button className="b-button" onClick={handleBackClick}>
          <FaArrowLeft /> Back
        </button>
        <h1>Our Services</h1>
        <p>Explore the wide range of life insurance services we offer to protect you and your family.</p>
      </header>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card" onClick={() => handleCardClick(service.link)}>
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
