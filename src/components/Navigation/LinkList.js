import React from 'react';
//import Link from './Link';
import { NavLink } from 'react-router-dom';

export default function LinkList() {
  return (
    <ul className="link__list">
      <NavLink className="link__item" to="/home">
        Home
      </NavLink>
      <NavLink className="link__item" to="/about">
        About
      </NavLink>
      <NavLink className="link__item" to="/skills">
        Skills
      </NavLink>
      <NavLink className="link__item" to="/projects">
        Projects
      </NavLink>
      <NavLink className="link__item" to="/contact">
        Contact
      </NavLink>
    </ul>
  );
}
