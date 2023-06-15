import React from 'react';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import classes from "./Services.module.css";
import CustomHero from '../Components/CustomHero/CustomHero';
import ServicesProjects from '../Components/ServicesProjects/ServicesProjects';

function Services() {
  return (
    <div className={classes.app_area}>
        <Navbar />
        <CustomHero 
          title="Services"
        />
        <ServicesProjects/>
        <Footer />
    </div>
  )
}

export default Services;