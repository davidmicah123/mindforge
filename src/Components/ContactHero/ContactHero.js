import React from 'react';
import classes from "./ContactHero.module.css";

function ContactHero() {
  return (
    <div className={classes.hero_container}>
        <div className={classes.hero_content_wrapper}>
            <h2>Contact Us</h2>
        </div>
    </div>
  )
}

export default ContactHero;