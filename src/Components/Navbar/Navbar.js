import React from 'react';
import classes from "./Navbar.module.css";
import logo from "../../Assets/Logos/Logo png01.png";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className={`${classes.nabar} ${classes.sticky}`}>
        <div className={classes.nav__container}>
            <img src={logo} alt="" className={classes.logo} />

            <ul className={classes.nav_links_wrapper}>
                <li><Link to="/" className={classes.link}>Home</Link></li>
                <li><Link to="/About" className={classes.link}>About</Link></li>
                <li><Link to="/Services" className={classes.link}>Services</Link></li>
                <li><Link to="/Contact" className={classes.link}>Contact Us</Link></li>
            </ul>

            <div className={classes.nav_action_btn_wrapper}>
              <a href="mailto: mindforgetechnologies@gmail.com">
                <button className={classes.mail_btn}>Mail Us</button>
              </a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;