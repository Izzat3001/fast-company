
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
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return <User 
                            {...user}
                            {...rest} 
                        />
                    })}
                </tbody>
            </table>
        </>
    )
};

export default Users;