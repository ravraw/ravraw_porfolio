import React from 'react';
//import {Link,Redirect} from "react-router-dom";
export default function ProjectDetails(props) {
  const data = props.location.state;
  return (
    <div>
      <h1>Project Details</h1>
       <h2>{data.name}</h2>
    <a href={data.address} target="_blank" rel="noopener noreferrer">Github repo</a>
      <img src={data.img} alt="dummy"/>
    </div>
  );
}
