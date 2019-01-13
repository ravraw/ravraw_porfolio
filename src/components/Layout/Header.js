import React from 'react';
import Logo from '../UI/Logo';
import Nav from '../Navigation/Nav';

export default function() {
  return (
    <React.Fragment>
      <header className="header">
        <Logo />
        <Nav />
        <div className="border_div" />
      </header>
    </React.Fragment>
  );
}
