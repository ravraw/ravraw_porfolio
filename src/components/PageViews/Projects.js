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
          img1="https://raw.githubusercontent.com/ravraw/grocery_app/master/screenshots/home.png"
          img2="https://github.com/ravraw/grocery_app/raw/master/screenshots/category.png"
          img3="https://github.com/ravraw/grocery_app/raw/master/screenshots/productDetails.png"
          img4="https://github.com/ravraw/grocery_app/raw/master/screenshots/orderHistory.png"
          img5="https://github.com/ravraw/grocery_app/raw/master/screenshots/compare.png"
          img6="https://github.com/ravraw/grocery_app/raw/master/screenshots/checkout.png"
        />
        <Project
          name={'Tinny App'}
          img={tinyApp}
          address="https://github.com/ravraw/lighthouseLabs_tinyApp"
          img1="https://github.com/ravraw/lighthouseLabs_tinyApp/raw/master/screenShots/register.png"
          img2="https://github.com/ravraw/lighthouseLabs_tinyApp/raw/master/screenShots/createUrl.png"
          img3="https://github.com/ravraw/lighthouseLabs_tinyApp/raw/master/screenShots/updateUrl.png"
          img4="https://github.com/ravraw/lighthouseLabs_tinyApp/raw/master/screenShots/urlCollection.png"
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
