import React from 'react';
//import {Link,Redirect} from "react-router-doler
export default function ProjectDetails(props) {
  const data = props.location.state;
  return (
    <div className="project">
      <div className="project__summary">
        <img
          className="project__summary_logo"
          src={data.img}
          alt="dummy"
          style={{ height: '175px', width: 'auto' }}
        />
        <div className="project__summary_info">
          <h2>Project Name : {data.name}</h2>
          <h2>
            Github Repo :
            <a href={data.address} target="_blank" rel="noopener noreferrer">
              {data.address}
            </a>
          </h2>
        </div>
      </div>
      <div className="project__gallery">
        <img
          src={data.img1}
          alt="img1"
          style={{ height: '300px', width: '450px' }}
        />
        <img
          src={data.img2}
          alt="img2"
          style={{ height: '300px', width: '450px' }}
        />
        <img
          src={data.img3}
          alt="img3"
          style={{ height: '300px', width: '450px' }}
        />
        <img
          src={data.img4}
          alt="img4"
          style={{ height: '300px', width: '450px' }}
        />
        <img
          src={data.img5}
          alt="img5"
          style={{ height: '300px', width: '450px' }}
        />
        <img
          src={data.img6}
          alt="img6"
          style={{ height: '300px', width: '450px' }}
        />
      </div>
    </div>
  );
}
