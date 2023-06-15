import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import classes from "./About.module.css";
import CustomHero from '../Components/CustomHero/CustomHero';

function About() {
  return (
    <div className={classes.app_area}>
        <Navbar />
        <CustomHero
          title="About Us"
        />
        
        <Footer />
    </div>
  )
}

export default About;