import React from 'react';
import classes from "./LoginForm.module.css";

function LoginForm() {
  return (
    <form className={classes.login_form}>
        <h2 className={classes.login_form_header}>Sign Up</h2>
        <div className={classes.single_input_box}>
            <label>Firstname</label>
            <input type='text' placeholder='Firstname' className={classes.login_input} />
        </div>
        <div className={classes.single_input_box}>
            <label>Lastname</label>
            <input type='text' placeholder='Firstname' className={classes.login_input} />
        </div>
        <div className={classes.single_input_box}>
            <label>Email Address</label>
            <input type='text' placeholder='example@gmail.com' className={classes.login_input} />
        </div>
        <div className={classes.single_input_box}>
            <label>Password</label>
            <input type='text' placeholder='Password' className={classes.login_input} />
        </div>
        <button className={classes.form_btn}>Signup</button>
    </form>
  )
}

export default LoginForm;