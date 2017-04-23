import React from "react";
import css from "./style.less";

const TIME_OUT_TIMER = 50;
const SHOW_HEADER_AFTER = 1000;

class Intro extends React.Component{
  constructor(props){
    super(props);
    this.state = {message: "do you want to hang out ?", text: "", showHeader: false};
  }

  componentDidMount(){
    window.setTimeout(() => {
      this.state.message.split("").forEach((char, index) => {
        window.setTimeout( () => {
          this.setState( (prevState) => {
            return {text: prevState.text + char, showHeader: true};
        });
      }, (index + 1) * TIME_OUT_TIMER);
    });
	}, SHOW_HEADER_AFTER);
  }
  
  render () {
    return (
      <section className={css.section} style={{height: window.innerHeight+ "px"}}>
		<div className={css.text}>
			<h1 className={this.state.showHeader ? css.header : ""}>Hey, I'm Šarūnė</h1>
			<p className={css.quote} >{this.state.text}</p>
		</div>
		<div className={css.arrowContainer}>
			<button className={[css.iconDown, css.arrowButton].join(" ")} onClick={this.props.event}></button>
		</div>
      </section>
    );
  }
}

Intro.propTypes = {
  event: React.PropTypes.func
};

export default Intro;