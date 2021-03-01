import React from 'react';
import './ButtonSecondary.css';

const ButtonSecondary = ({ name, type, onClick }) => {
  return <button className="buttonSecondary">{name}</button>;
};

export default ButtonSecondary;
