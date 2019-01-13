import React from 'react';
import reactLogo from '../../assets/images/react.png';
import reactRouterLogo from '../../assets/images/reactRouter.png';
import sassLogo from '../../assets/images/sass.png';
//import reactLogo from '../../assets/images/react.png';

export default function() {
  return (
    <footer className="footer">
    <p>This site is work in progress -- Built with :</p>
    <img src={sassLogo}/>
     <img src={reactRouterLogo}/>
    <img src={reactLogo}/>
   
    </footer>
  );
}
