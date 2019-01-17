import React from 'react';
//import Link from './Link';
import { NavLink } from 'react-router-dom';

export default function LinkList() {
  return (
    <ul className="link__list">
      <NavLink className="link__item" activeClassName="selected" exact to="/">
        Home
      </NavLink>
      <NavLink className="link__item" activeClassName="selected" to="/about">
        About
      </NavLink>
      <NavLink className="link__item" activeClassName="selected" to="/skills">
        Skills
      </NavLink>
      <NavLink className="link__item" activeClassName="selected" to="/projects">
        Projects
      </NavLink>
      <NavLink className="link__item" activeClassName="selected" to="/contact">
        Contact
      </NavLink>
    </ul>
  );
}
