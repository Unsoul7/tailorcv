import React from "react";
import '../styles/homepage.css'

export const Homepage = () => {
    return(
        <section className="hero-section-home-page">
            <div className="hero-container">
                <div id="parallelogram-1"></div>
                <div id="parallelogram-2"></div>
            </div>
            <div className="hero-container">
                <h1>The Customizable Online <br /> Resume Builder</h1>
                <p>Easily create the perfect resume for any job using our best-in-class resume builder platform.</p>
                    <Link to=''>Create My Resume</Link>  
            </div>
        </section>
    )
}