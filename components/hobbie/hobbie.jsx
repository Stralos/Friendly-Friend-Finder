import React from "react";

import css from "./style.less";

class Hobbie extends React.Component {
  constructor(props){
    super(props);
  }
  
  render () {
    return (
      <section className={css.section}>
        <h2>My Hobbie</h2>
		<div>{this.props.name}</div>
      </section>
    );
  }
}

export default Hobbie;