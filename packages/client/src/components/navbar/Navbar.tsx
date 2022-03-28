import React from "react";
import logo from '../../assets/images/logo.png';
import './navbar.scss';

const Navbar = () => {

  return (
    <div className="navbar">
        <div className="logo">
            <img src={logo} alt="App logo" width="50" height="50" />
        </div>
    </div>
  );
};

export default Navbar;
