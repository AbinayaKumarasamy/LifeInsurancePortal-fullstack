import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext'; // Correct import
import './NavBar.css';
import logo from '../../assets/logo.png';

const NavBar = () => {
  const { username } = useContext(UserContext);

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Life Insurance Logo" className="logo" />
        <div>Life Insurance</div>
      </div>
      
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        {username && <div>Hi {username}</div>}
      </nav>
    </header>
  );
};

export default NavBar;