import React from "react";

import css from "./style.less";

class Footer extends React.Component {
  render () {
    return (
			<section className={css.section}>
				<div className={css.box}>
					Footer
				</div>
			</section>
    );
  }
}

export default Footer;