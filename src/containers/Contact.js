import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import classes from "./Contact.module.css";
import LoginForm from '../Components/LoginForm/LoginForm';
import CustomHero from '../Components/CustomHero/CustomHero';


export default function Contact() {
  return (
    <div className={classes.contact_area}>
        <Navbar />
            <CustomHero 
              title="Contact Us"
            />
            <LoginForm />
        <div  className={classes.map_display_area}></div>
        <Footer />
    </div>
  )
}
