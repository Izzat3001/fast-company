import React from "react";
import PoropTypes from "prop-types";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({ onSort, selectedSort, columns, data, children }) => {
    return (
        <table className="table">
            {children || (
                <>
                    <TableHeader {...{ onSort, selectedSort, columns }} />
                    <TableBody {...{ columns, data }} />
                </>
            )}
        </table>
    );
};

Table.prototype = {
    onSort: PoropTypes.func,
    selectedSort: PoropTypes.object,
    columns: PoropTypes.object,
    data: PoropTypes.array,
    children: PoropTypes.array
};

export default Table;
