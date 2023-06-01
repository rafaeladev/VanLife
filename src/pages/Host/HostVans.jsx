import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api.js";
import { requireAuth } from "../../utils.js";

export async function loader({ request }) {
    await requireAuth(request);
    return getHostVans();
}

const Vans = () => {
    // const [vans, setVans] = React.useState([]);
    const vans = useLoaderData();

    // React.useEffect(() => {
    //     fetch("/api/host/vans")
    //         .then((res) => res.json())
    //         .then((data) => setVans(data.vans));
    // }, []);

    const vansHosted = vans.map((van) => (
        <Link to={van.id} key={van.id} className="host-van-link-wrapper">
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={` ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ));
    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                <section>{vansHosted}</section>
            </div>
        </section>
    );
};

export default Vans;
