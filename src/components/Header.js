import React from 'react';
import Logo from './Logo';
import Nav from './Nav';

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
