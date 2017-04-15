import React from "react";

import css from "./style.less";

class ContactMe extends React.Component {
  render (){
    return (
      <section className={css.section}>
		<div className={css.box}>
          <h1 className={css.header}>Get in Touch with Me</h1>
          <p>
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit.
          </p>
		</div>
      </section>
    );
  }
}

export default ContactMe;