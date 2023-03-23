import React from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";

const VanDetail = () => {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    };
    const { id } = useParams();

    const [currentVan, setCurrentVan] = React.useState(null);

    React.useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then((res) => res.json())
            .then((data) => setCurrentVan(data.vans));
    }, [id]);

    return (
        <section>
            <Link to="../." relative="path" className="back-button">
                &larr; <span>Back to all vans</span>
            </Link>
            {currentVan ? (
                <div className="host-van-detail">
                    <div className="host-van-detail-single">
                        <img src={currentVan.imageUrl} alt="van" />
                        <div className="host-van-detail-text">
                            <i
                                className={`van-type ${currentVan.type} selected`}
                            >
                                {currentVan.type}
                            </i>
                            <h2>{currentVan.name}</h2>
                            <p className="van-price">
                                <span>${currentVan.price}</span>/day
                            </p>
                        </div>
                    </div>
                    <nav className="host-van-detail-link">
                        <NavLink
                            className=""
                            to="."
                            end
                            style={({ isActive }) =>
                                isActive ? activeStyle : null
                            }
                        >
                            Details
                        </NavLink>
                        <NavLink
                            className=""
                            to="pricing"
                            style={({ isActive }) =>
                                isActive ? activeStyle : null
                            }
                        >
                            Pricing
                        </NavLink>
                        <NavLink
                            className=""
                            to="photos"
                            style={({ isActive }) =>
                                isActive ? activeStyle : null
                            }
                        >
                            Photos
                        </NavLink>
                    </nav>
                    <Outlet context={{ currentVan }} />
                </div>
            ) : (
                <h2>Loading ... </h2>
            )}
        </section>
    );
};

export default VanDetail;
