import React from 'react';
import logo from '../assets/images/logo.png';

export default function Logo() {
  return (
    <div className="logo__box">
      <img src={logo} alt="" className="logo" width="100px" />
    </div>
  );
}
