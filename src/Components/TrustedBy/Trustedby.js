import React, { Component } from 'react';
import classes from "./TrustedBy.module.css";

class Trustedby extends Component {
    render() {
        return (
            <div className={classes.trusted_area}>
                <h3>Trusted by</h3>
                <div className={classes.trusted_by_logo_wrapper}>
                    <div className={classes.logo}>
                        Google
                    </div>
                    <div className={classes.logo}>
                        Coursera
                    </div>
                    <div className={classes.logo}>
                        Amazon
                    </div>
                    <div className={classes.logo}>
                        Youtube
                    </div>
                    <div className={classes.logo}>
                        Aptech
                    </div>
                </div>
            </div>
        );
    }
}

export default Trustedby;
