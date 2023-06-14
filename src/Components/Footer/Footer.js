import classes from "./Footer.module.css";
import logo from "../../Assets/Logos/Logo png01.png";

function Footer() {
    return <footer className={classes.footer}>
        <div className={classes.footer_content_wrapper}>
            <div className={classes.company_details_area}>
                <img src={logo} alt="" className={classes.logo} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum nobis natus.</p>
            </div>

            <div className={classes.footer_links_wrapper}>
                <ul className={classes.footer_links_list}>
                    <li>About</li>
                    <li>About Us</li>
                    <li>Features</li>
                    <li>News & Blog</li>
                </ul>
                <ul className={classes.footer_links_list}>
                    <li>Company</li>
                    <li>Why Video?</li>
                    <li>Security</li>
                    <li>Membership</li>
                </ul>
                <ul className={classes.footer_links_list}>
                    <li>Support</li>
                    <li>Faqs</li>
                    <li>Support Center</li>
                    <li>Contact Us</li>
                </ul>
                <ul className={classes.footer_links_list}>
                    <li>Partner</li>
                    <li>Our partner</li>
                    <li>Become A Partner</li>
                </ul>
            </div>
        </div>
        <div className={classes.terms_and_condition_container}>
            <div className={classes.tac_div_1}>
                <p>@Video 2023. All rights reserved</p>
            </div>
            <div className={classes.tac_div_2}>
                <p>Terms of agreement</p>
                <p>oprivacy policy</p>
            </div>
        </div>
    </footer>;
}

export default Footer;