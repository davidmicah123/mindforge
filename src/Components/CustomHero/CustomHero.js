import React from 'react';
import classes from "./CustomHero.module.css";

function CustomHero(props) {
  return (
    <div className={classes.hero_container}>
        <div className={classes.hero_content_wrapper}>
            <h2>{props.title}</h2>
        </div>
    </div>
  )
}

export default CustomHero;