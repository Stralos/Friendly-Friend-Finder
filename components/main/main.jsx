import React from "react";
import AboutMe from "../aboutMe/aboutMe.jsx";
import Galery from "../galery/galery.jsx";
import Footer from "../footer/footer.jsx";
import ContactMe from "../contactMe/contactMe.jsx";

class Main extends React.Component {
  render () {
    return (
        <div>
            <Galery/>
            <AboutMe/>
            <ContactMe/>
            <Footer/>
        </div>
    );
  }
}

export default Main; 