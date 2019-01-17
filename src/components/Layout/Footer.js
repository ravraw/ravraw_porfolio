import React from 'react';
import reactLogo from '../../assets/images/react.png';
import reactRouterLogo from '../../assets/images/reactRouter.png';
import sassLogo from '../../assets/images/sass.png';
//import reactLogo from '../../assets/images/react.png';

export default function() {
  return (
    <footer className="footer">
      <p>Built with :</p>
      <img src={sassLogo} alt="img" />
      <img src={reactRouterLogo} alt="img" />
      <img src={reactLogo} alt="img" />
    </footer>
  );
}
