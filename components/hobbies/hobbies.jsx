import React from "react";
import Hobbie from "../hobbie/hobbie.jsx";

import HobbieList from "../../models/hobbies.js";

import css from "./style.less";

class Hobbies extends React.Component {
  constructor(){
    super();

    let hobbies = new HobbieList();
    this.state = {hobbies: hobbies.list};
  }
  
  render () {
    return (
      <section>
        <h1>My Hobbies</h1>
        <div className={css.hobbieList}>
          {this.state.hobbies.map(hobbie => <Hobbie key={hobbie.id} {...hobbie}/>)}
        </div>
      </section>
    );
  }
}

export default Hobbies;