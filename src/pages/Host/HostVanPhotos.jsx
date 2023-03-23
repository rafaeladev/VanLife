import React from "react";
import { useOutletContext } from "react-router";

const HostVanPhotos = () => {
    const { currentVan } = useOutletContext();
    return (
        <img
            src={currentVan.imageUrl}
            className="host-van-detail-image"
            alt="van"
        />
    );
};

export default HostVanPhotos;
