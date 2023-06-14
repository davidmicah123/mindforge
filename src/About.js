import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import classes from "./About.module.css";

function About() {
  return (
    <div className={classes.app_area}>
        <Navbar />
        <Footer />
    </div>
  )
}

export default About;