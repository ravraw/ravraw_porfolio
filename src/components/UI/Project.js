import React from 'react';
import { Link } from 'react-router-dom';
export default function Project(props) {
  return (
    <div className="projects__item">
      {props.name}{' '}
      <Link to={{
        pathname:"/projectDetails",
        state:{...props}
      }} >
        <img src={props.img} alt="" />
      </Link>
    </div>
  );
}
