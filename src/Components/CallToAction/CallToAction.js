import classes from "./CallToAction.module.css";
const CallToAction = () => {
    return(
        <div className={classes.call_to_action_section}>
            <div className={classes.call_to_action_box}>
                <h1>Get Started with Video</h1>
                <p>Subscribe and find super attractive <br /> price quotes from us</p>
                <button className={classes.get_started}>Get Started</button>
            </div>
        </div>
    )
} 

export default CallToAction;