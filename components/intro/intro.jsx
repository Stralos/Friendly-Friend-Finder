import React from "react";
import css from "./style.less";

class Intro extends React.Component {
  constructor(props){
    super(props);
    this.state = {message: "Description about me", text: ""};
  }

  componentDidMount(){
    for (let i = 0; i < this.state.message.length; i++) {
      window.setTimeout(() => {
        this.setState((prevState) => {
          return {text: prevState.text + this.state.message[i]};
        });}, (i+1) * 100);
    }
  }
  
  render () {
    return (
      <section className={css.section} style={{height: window.innerHeight+ "px"}}>
		<div className={css.text}>
			<h1>Big Header Text</h1>
			<p>{this.state.text}</p>
		</div>
		<button onClick={this.props.event}>Test</button>
      </section>
    );
  }
}

Intro.propTypes = {
  event: React.PropTypes.func
};

export default Intro;