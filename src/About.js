import React from "react";
import imageabout from "./images/image-about.png";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <img src={imageabout} alt="About" className="about--image" />
            <section>
                <div className="about--section">
                    <h1 className="about--title">
                        Don’t squeeze in a sedan when you could relax in a van.
                    </h1>
                    <div className="about--text">
                        <p>
                            Our mission is to enliven your road trip with the
                            perfect travel van rental. Our vans are recertified
                            before each trip to ensure your travel plans can go
                            off without a hitch. (Hitch costs extra 😉)
                        </p>
                        <p>
                            Our team is full of vanlife enthusiasts who know
                            firsthand the magic of touring the world on 4
                            wheels.
                        </p>
                    </div>
                    <div className="about--box">
                        <h2 className="about--subtitle">
                            Your destination is waiting.
                        </h2>
                        <h2 className="about--subtitle">Your van is ready.</h2>
                        <button className="about--button">
                            <Link className="link-button" to="/vans">
                                Explore our vans
                            </Link>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
