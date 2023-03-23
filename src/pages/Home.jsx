import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section className="home">
            <h1 className="home-title">
                You got the travel plans, we got the travel vans.
            </h1>
            <p className="home-text">
                Add adventure to your life by joining the #vanlife movement.
                Rent the perfect van to make your perfect road trip.
            </p>
            <Link className="link-button home--button" to="/vans">
                Find you vans
            </Link>
        </section>
    );
};

export default Home;
