import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext'; 
import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
  const { username } = useContext(UserContext);

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Life Insurance Logo" className="logo" />
        <div>Life Insurance</div>
      </div>
      
      <nav className="nav">
        <Link to="/Display">Home</Link>
        <Link to="/About">About Us</Link>
        <Link to="/Service">Services</Link>
        {username && <div>Hi {username}</div>}
      </nav>
    </header>
  );
};

export default Header;
