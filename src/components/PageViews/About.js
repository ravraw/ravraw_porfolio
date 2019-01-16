import React from 'react';

export default function About() {
  return (
    <div className="about">
      <img
        src="https://avatars3.githubusercontent.com/u/32376706?s=460&v=4"
        alt=""
        width="200px"
        height="200px"
      />
      <div className="about__bio">
        <h2> Restaurant manger to Full-stack Web developer</h2>
        <p>
          It all started by managing a Facebook page for a previous employer,
          which lead me to research more about web development. More I learned,
          more fascinated I became with the power of coding, and how it is
          shaping the future.
        </p>
        <p>
          After self-learning the basics of front end development from online
          resources like Udemy and free code camp, I decided to join "
          <a href="https://lighthouselabs.ca/web-bootcamp" target="_blanck">
            Lighthouse labs Full-stack web developer program
          </a>
          ". It was an amazing learning experience and helped to develop my
          skills as a professional.
        </p>
        <p>
          Currently, I am looking for an opportunity as a "Junior web developer"
          and working on side projects to enhance my skills.
        </p>
        <p>
          "I am passionate about crafting great user experience while developing
          clean modular code. Keen to learn new web technologies to build better
          more efficient solutions."
        </p>
      </div>
    </div>
  );
}
