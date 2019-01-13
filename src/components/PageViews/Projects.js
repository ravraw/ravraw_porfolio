import React from 'react';
import Project from '../UI/Project';
import crossAisle from '../../assets/images/crossAisle.png';
import tinyApp from '../../assets/images/tinnyApp.png';
import chatty from '../../assets/images/chatty.png';
import tweeter from '../../assets/images/tweeter.png';
import crazyRavs from '../../assets/images/crazyRavs.png';

export default function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects__list">
        <Project
          name={'Cross aisle'}
          img={crossAisle}
          address="https://github.com/ravraw/grocery_app"
        />
        <Project
          name={'Tinny App'}
          img={tinyApp}
          address="https://github.com/ravraw/lighthouseLabs_tinyApp"
        />
        <Project
          name={'Chatty'}
          img={chatty}
          address="https://github.com/ravraw/chatty_app"
        />
        <Project
          name={'Twitter'}
          img={tweeter}
          address="https://github.com/ravraw/tweeter"
        />
        <Project
          name={'Jungle rails'}
          img={crossAisle}
          address="https://github.com/ravraw/jungle-rails"
        />
        <Project
          name={'Resourse wall'}
          img={chatty}
          address="https://github.com/ravraw/Resource_Wall"
        />
        <Project
          name={"Crazy rav's"}
          img={crazyRavs}
          address="https://github.com/ravraw/crazy_ravs"
        />
        <Project name={'Cross aisle'} img={tinyApp} />
      </div>
    </div>
  );
}
