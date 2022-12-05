import React from "react";

const Qualities = ({  color, name, _id }) => {
    return <span key={_id} className={'rounded-3 m-1 small p-1 text-white bg-'+color}>{name}</span>
};

export default Qualities;