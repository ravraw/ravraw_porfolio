import React from 'react';

export default function Skills() {
  return (
    <div className="skills">
      <h1>Technologies Worked with</h1>
      <div className="skills__list">
        <div className="skills__item">
          <h3>front-end</h3>
          <ul>
            <li>Javascript</li>
            <li>html5</li>
            <li>css3</li>
            <li>sass/scss</li>
            <li>Bootstrap</li>
            <li>React</li>
            <li>React router</li>
            <li>Jest / Enzyme (testing)</li>
            <li>Webpack (Bundling)</li>
            <li>Babel  (Compiler)</li>
            <li>GIT (version control)</li>
          </ul>
        </div>
        <div className="skills__item">
          <h3>back end</h3>
          <ul>
            <li>NodeJs</li>
            <li>Express</li>
            <li>Ruby </li>
            <li>Ruby on Rails</li>
            <li>Restfull Api</li>
            <li>GraphQL</li>
            <li>PostgresQl</li>
            <li>MongoDB</li>
            <li>KnexJs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
