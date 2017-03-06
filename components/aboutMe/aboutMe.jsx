import React from "react";
import css from "./style.less";

class AboutMe extends React.Component {
  render (){
    return (
      <section className={css.section}>
        <div className={css.box}>
            <h1 className={css.test}>Who is Behind All This</h1>

            <div className={css.container}>
              <div>
                <p className={css.quote}>
                  Easygoing, curious, sarcastic, rational (more or less). 
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus.
                </p>
                <p>
                  Tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.
                </p>
                <p>
                  Fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla.
                </p>
              </div>
            
              <div>
                <img src="../img/profile.jpg" height="426" width="283"/>
              </div>
            </div>
            
        </div>
      </section>
    );
  }
}

export default AboutMe;