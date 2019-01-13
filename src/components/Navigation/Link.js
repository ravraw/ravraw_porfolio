import React from 'react';

export default function Link(props) {
  return (
    <React.Fragment>
      <li className="link">{props.name}</li>
    </React.Fragment>
  );
}
