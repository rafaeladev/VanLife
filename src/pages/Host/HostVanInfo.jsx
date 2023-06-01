import React from "react";
import { useOutletContext, useLoaderData, useParams } from "react-router";
import { getHostVans } from "../../api.js";

const HostVanInfo = () => {
    // const { currentVan } = useOutletContext();
    const params = useParams();
    const currentVan = getHostVans(params.id);

    console.log(currentVan);
    return (
        <section className="host-van-detail-info">
            <h4>
                Name: <span>{currentVan.name}</span>
            </h4>
            <h4>
                Category: <span>{currentVan.type}</span>
            </h4>
            <h4>
                Description: <span>{currentVan.description}</span>
            </h4>
            <h4>
                Visibility: <span>public</span>
            </h4>
        </section>
    );
};

export default HostVanInfo;
