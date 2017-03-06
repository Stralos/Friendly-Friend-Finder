import React from "react";
import Hobbie from "../hobbie/hobbie.jsx";

import css from "./style.less";

class Hobbies extends React.Component {
  constructor(){
    super();

    let hobbies = ["Photography", "Rock climbing", "Cooking", "Reading", "Dancing", "Traveling"];
    this.state = {hobbies: hobbies};
  }
  
  render () {
    return (
      <section>
        <h1>My Hobbies</h1>
		<div className={css.hobbieList}>
			{this.state.hobbies.map(hobbie => <Hobbie key={hobbie} name={hobbie}/>)}
		</div>
      </section>
    );
  }
}

export default Hobbies;