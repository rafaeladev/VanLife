import React from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../../api.js";

export function loader() {
    return getVans();
}

export default function Vans() {
    const vans = useLoaderData();

    const [searchParams, setSearchParams] = useSearchParams();

    // const [error, setError] = React.useState(null);
    const typeFilter = searchParams.get("type");

    // Filtrer les vans par type
    const vansDisplayed = typeFilter
        ? vans.filter(
              (vanFiltered) => vanFiltered.type.toLowerCase() === typeFilter
          )
        : vans;

    const vansElements = vansDisplayed.map((van) => (
        <div key={van.id} className="van-card">
            <Link
                to={van.id}
                state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter,
                }}
            >
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

    // if (loading) {
    //     return <h1>Loading...</h1>;
    // }

    // if (error) {
    //     return <h1>There was an error {error.message}</h1>;
    // }

    return (
        <section className="van">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button
                    className={`van-type simple ${
                        typeFilter === "simple" ? "selected" : ""
                    }`}
                    onClick={() => setSearchParams({ type: "simple" })}
                >
                    Simple
                </button>
                <button
                    className={`van-type luxury ${
                        typeFilter === "luxury" ? "selected" : ""
                    }`}
                    onClick={() => setSearchParams({ type: "luxury" })}
                >
                    Luxury
                </button>
                <button
                    className={`van-type rugged ${
                        typeFilter === "rugged" ? "selected" : ""
                    }`}
                    onClick={() => setSearchParams({ type: "rugged" })}
                >
                    Rugged
                </button>
                {typeFilter ? (
                    <button
                        className="van-type clear-filters"
                        onClick={() => setSearchParams({})}
                    >
                        Clear filter
                    </button>
                ) : null}
                {/* <Link to="?type=simple" className="van-type simple">
                    Simple
                </Link>
                <Link to="?type=luxury" className="van-type luxury">
                    Luxury
                </Link>
                <Link to="?type=rugged" className="van-type rugged">
                    Rugged
                </Link>
                <Link to="." className="van-type clear-filters">
                    Clear filter
                </Link> */}
            </div>

            <div className="van-list-container">
                <div className="van-list">{vansElements}</div>
            </div>
        </section>
    );
}
