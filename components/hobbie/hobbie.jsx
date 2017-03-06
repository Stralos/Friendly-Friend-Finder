import React from "react";

import css from "./style.less";

class Hobbie extends React.Component {
  constructor(props){
    super(props);
  }
  
  render () {
    return (
      <section className={css.section}>
        <div className={css.logo}></div>
        
        <div className={css.content}>
          
          <h2 className={css.header}>
            {this.props.name}
          </h2>

          <div>
            {this.props.description}
          </div>

        </div>
        
      </section>
    );
  }
}

export default Hobbie;