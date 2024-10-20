import React from "react";
import '../styles/homepage.css'
import { Link } from "react-router-dom";

export const Homepage = () => {
    return (
        <section className="main-homepage">

            <section className="hero-section-home-page">
                <div className="hero-container">
                    <div id="parallelogram-1"></div>
                    <div id="parallelogram-2"></div>
                </div>
                <div className="hero-container">
                    <h1>The Online <br /> Resume Builder</h1>
                    <p>Easily create the perfect resume for any job using our best-in-class resume builder platform.</p>
                    <Link id="create-resume-btn" to=''>Create My Resume</Link>
                </div>
            </section>

            <section className="about-para">
                <p>Our online resume builder offers a quick and easy way to create your professional resume from 25+ design templates. Create a resume using our AI resume builder feature, plus take advantage of expert suggestions and customizable modern and professional resume templates. Free users have access to our easy-to-use tool and TXT file downloads.</p>
            </section>

            <section className="templates-section">
                <h1>Pick one of many world-class templates and build your resume in minutes</h1>
                <div className="templates">
                    
                </div>
            </section>

        </section>
    )
}