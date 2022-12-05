
import React from "react";
import User from "./user";

const Users = ({ users, ...rest }) => {
    return(
        <>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Всретился, раз</th>
                    <th scope="col">Отценки</th>
                </tr>
                </thead>
                <tbody>
                    {rest.map(item => User(item))}
                </tbody>
            </table>
        </>
    )
};

export default Users;