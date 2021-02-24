import React from 'react';
import MenuItem from './MenuItem';
import './Menu.css';

const Menu = () => {
  return (
    <div classname="menu" style={menuStyle}>
      <MenuItem title="exisiting inventory" />
      <MenuItem title="used inventory" />
      <MenuItem title="trade-in" />
      <MenuItem title="cybertruck" />
      <MenuItem title="roadster" />
      <MenuItem title="semi" />
      <MenuItem title="charging" />
      <MenuItem title="powerwall" />
      <MenuItem title="commercial solar" />
      <MenuItem title="test drive" />
      <MenuItem title="find us" />
      <MenuItem title="support" />
      <MenuItem title="united states" />
    </div>
  );
};

const menuStyle = {
  zIndex: 1,
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  overflowY: 'scroll',
  top: 0,
  bottom: 0,
  right: 0,
  padding: '70px 20px 20px 20px',
  gap: '25px',
  minWidth: '280px',
};

export default Menu;
