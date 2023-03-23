import React from "react";
import { Link } from "react-router-dom";

export default function Vans() {
    const [vans, setVans] = React.useState([]);

    React.useEffect(() => {
        fetch("/api/vans")
            .then((res) => res.json())
            .then((data) => setVans(data.vans));
    }, []);

    const vansElements = vans.map((van) => (
        <div key={van.id} className="van-card">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} alt="vans" />
                <div className="van-text">
                    <h2>{van.name}</h2>
                    <p>
                        ${van.price}
                        <span>/day</span>
                    </p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ));

    return (
        <section className="van">
            <h1>Explore our van options</h1>
            {vans === [] ? (
                <h2>Loading...</h2>
            ) : (
                <div className="van-list-container">
                    <div className="van-list">{vansElements}</div>
                </div>
            )}
        </section>
    );
}
