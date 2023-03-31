import React from "react";
import {
    useParams,
    Link,
    NavLink,
    Outlet,
    useLoaderData,
} from "react-router-dom";
import { getHostVans } from "../../api.js";
import { requireAuth } from "../../utils.js";

export async function loader({ params }) {
    await requireAuth();
    return getHostVans(params.id);
}

const VanDetail = () => {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    };
    // const { id } = useParams();

    // const [currentVan, setCurrentVan] = React.useState(null);
    const currentVan = useLoaderData();

    // React.useEffect(() => {
    //     fetch(`/api/vans/${id}`)
    //         .then((res) => res.json())
    //         .then((data) => setCurrentVan(data.vans));
    // }, [id]);

    return (
        <section>
            <Link to="../." relative="path" className="back-button">
                &larr; <span>Back to all vans</span>
            </Link>
            <div className="host-van-detail">
                <div className="host-van-detail-single">
                    <img src={currentVan.imageUrl} alt="van" />
                    <div className="host-van-detail-text">
                        <i className={`van-type ${currentVan.type} selected`}>
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
        </section>
    );
};

export default VanDetail;
