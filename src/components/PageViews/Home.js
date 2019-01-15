import React from 'react';

export default function Home() {
  return (
    <React.Fragment>
      <div className="home">
        <h1 className="heading__primary">
          <span>Rav</span>
          <span className="end">indra</span>
        </h1>

        <h1 className="heading__secondary">
          <span className="raw">Raw</span>
          <span className="end">at</span>
        </h1>
        <h1 className="heading__tertiary">.io</h1>
      </div>
    </React.Fragment>
  );
}
