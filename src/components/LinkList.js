import React from 'react';
//import Link from './Link';
import { NavLink } from 'react-router-dom';

export default function LinkList() {
  return (
    <ul className="link__list">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </ul>
  );
}
