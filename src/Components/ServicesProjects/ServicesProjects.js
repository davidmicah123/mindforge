import React from 'react';
import classes from "./ServicesProjects.module.css";
import img from "../../Assets/Images/hero2.webp"

function ServicesProjects() {
  return (
    <section className={classes.services_project_section}>
        <div className={classes.projects_img_wrapper}>
            <div className={classes.project_img_wraper}>
                <img src={img} alt='' className={classes.project_img} />
            </div>
            <div className={classes.project_img_wraper}>
                <img src={img} alt='' className={classes.project_img} />
            </div>
            <div className={classes.project_img_wraper}>
                <img src={img} alt='' className={classes.project_img} />
            </div>
            <div className={classes.project_img_wraper}>
                <img src={img} alt='' className={classes.project_img} />
            </div>
            <div className={classes.project_img_wraper}>
                <img src={img} alt='' className={classes.project_img} />
            </div>
            <div className={classes.project_img_wraper}>
                <img src={img} alt='' className={classes.project_img} />
            </div>
            <div className={classes.project_img_wraper}>
                <img src={img} alt='' className={classes.project_img} />
            </div>
            <div className={classes.project_img_wraper}>
                <img src={img} alt='' className={classes.project_img} />
            </div>
        </div>
    </section>
  )
}

export default ServicesProjects;