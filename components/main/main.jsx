import React from "react";
import AboutMe from "../aboutMe/aboutMe.jsx";
import Galery from "../galery/galery.jsx";

import css from "./style.less";

class Main extends React.Component {
  render () {
    return (
        <div>
            <h1 className={css.header}>Test</h1>
            <AboutMe/>
            <Galery/>
        </div>
    );
  }
}

export default Main; 