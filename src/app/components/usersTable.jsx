import React from "react";
import PropTypes from "prop-types";
import Bookmark from "./bookmark";
import QualitiesList from "./quailitiesList";
import Table from "./table";

const UserTable = ({
    users,
    onSort,
    selectedSort,
    onBookmark,
    onDelet,
    ...rest
}) => {
    const columns = {
        name: { path: "name", name: "Имя" },
        qualities: {
            name: "Качества",
            component: (user) => (
                <QualitiesList qualities={user.qualities} />
            )
        },
        profession: { path: "profession.name", name: "Профессия" },
        completedMeetings: { path: "completedMeetings", name: "Всретился, раз" },
        rate: { path: "rate", name: "Отценки" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <Bookmark
                    status={user.bookmark}
                    onClick={() => onBookmark(user._id)}
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    className="btn btn-danger m-1"
                    onClick={() => onDelet(user._id)}
                >
                    delete
                </button>
            )
        }
    };
    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={users}
        />
    );
};

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onBookmark: PropTypes.func.isRequired,
    onDelet: PropTypes.func.isRequired
};

export default UserTable;

/* <tbody>
{users.map((user) => {
    return <User key={user._id} {...user} {...rest} />;
})}
</tbody> */
