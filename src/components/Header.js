import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import TeslaLogo from '../assets/teslaLogoSmall.svg';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="header">
      <div className="header_logo">
        <img src={TeslaLogo} alt="Tesla logo" />
      </div>

      <div className="header_center">
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Model Y</p>
        <p>Solar Roof</p>
        <p>Solar Panels</p>
      </div>

      <div className="header_right">
        <p className={isMenuOpen && 'hidden'}>Shop</p>
        <p className={isMenuOpen && 'hidden'}>Tesla Account</p>
        <div className="menu_icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </div>
  );
};

export default Header;
