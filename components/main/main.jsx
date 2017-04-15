import React from "react";
import ReactDOM from "react-dom";
import AboutMe from "../aboutMe/aboutMe.jsx";
import Galery from "../galery/galery.jsx";
import Footer from "../footer/footer.jsx";
import ContactMe from "../contactMe/contactMe.jsx";
import Intro from "../intro/intro.jsx";

class Main extends React.Component {
  constructor(){
    super();
    this.scrollToAboutMe = this.scrollToAboutMe.bind(this);
  }

  scrollToAboutMe(){
    ReactDOM.findDOMNode(this.aboutMeDOM).scrollIntoView({ behavior: "smooth" });
  }

  render () {
    return (
        <div>
            <Intro event={this.scrollToAboutMe}/>
        
            <AboutMe ref={component => this.aboutMeDOM = component} />
            <ContactMe/>
            <Footer/>
        </div>
    );
  }
}

export default Main; 