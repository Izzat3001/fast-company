import React from "react";
import PropTypes from "prop-types";

const GruopList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    // console.log("items", Object.keys(items));
    return (
        <ul className="list-group m-0">
            {Object.keys(items).map((item) => (
                <li
                    key={items[item][valueProperty]}
                    className={
                        "list-group-item" +
                (items[item][contentProperty] === selectedItem ? " active" : "")
                    }
                    onClick={() => onItemSelect(items[item][contentProperty])}
                    role="button"
                >
                    {items[item][contentProperty]}
                </li>
            ))}
        </ul>
    );
};

GruopList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GruopList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    contentProperty: PropTypes.string.isRequired,
    valueProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    // selectedItem: PropTypes.object
};

export default GruopList;
