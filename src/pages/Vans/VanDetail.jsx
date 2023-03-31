import React from "react";
import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getVans } from "../../api.js";

export function loader({ params }) {
    //console.log(params);
    return getVans(params.id);
}

const VanDetail = () => {
    // const params = useParams();
    const location = useLocation();
    //console.log(location);
    // const [van, setVan] = React.useState(null);
    const van = useLoaderData();

    // const search = location.state?.search || ""
    const type = location.state?.type || "all";

    //console.log(`/api/vans/${param.id}`);
    // React.useEffect(() => {
    //     fetch(`/api/vans/${params.id}`)
    //         .then((res) => res.json())
    //         .then((data) => setVan(data.vans));
    // }, [params.id]);

    return (
        <div className="van-detail-container">
            <Link
                to={location.state ? `..${location.state.search}` : ".."}
                relative="path"
                className="back-button"
            >
                &larr; <span>Back to {type} vans</span>
            </Link>

            <div className="van-detail">
                <img src={van.imageUrl} alt="van" />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price">
                    <span>${van.price}</span>/day
                </p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div>
        </div>
    );
};

export default VanDetail;
