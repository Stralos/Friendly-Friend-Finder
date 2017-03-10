import React from "react";

import css from "./style.less";

class Hobbie extends React.Component {
  constructor(props){
    super(props);
  }
  
  render () {
    let logoClasses = [css.logo, css[this.props.logo]].join(" ");
    return (
      <section className={css.section}>
        <div className={logoClasses}></div>
        
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

Hobbie.propTypes = {
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
  logo: React.PropTypes.string.isRequired
};

export default Hobbie;