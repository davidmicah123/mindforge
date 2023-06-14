import React from 'react'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import classes from "./Contact.module.css";
import ContactHero from './Components/ContactHero/ContactHero';
import LoginForm from './Components/LoginForm/LoginForm';


export default function Contact() {
  return (
    <div className={classes.contact_area}>
        <Navbar />
            <ContactHero />
            <LoginForm />
        <div  className={classes.map_display_area}></div>
        <Footer />
    </div>
  )
}
