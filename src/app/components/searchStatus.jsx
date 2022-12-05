import React from "react";

const SearchStatus = ({ length }) => {
    const count = length;
    return count === 0 ? 
    <span className="p-1 m-1 h5 text-white bg-danger rounded-3">Никто не тусанет с тобой сегодня</span> :
    <span className="p-1 m-1 h5 text-white bg-primary rounded-3">{count} человек тусанет с тобой</span>;
};

export default SearchStatus;