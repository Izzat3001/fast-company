
import React, { useState } from "react";
import api from "../api";



const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const hendelDelet = (userId) => {
        const delUser = users.filter(item => item !== userId);
        setUsers(delUser)
        console.log('delet',  userId)
    }
    const formatCount = () => {
        const count = users.length;
        return count === 0 ? 
        <span className="p-1 m-1 h5 text-white bg-danger rounded-3">Никто не тусанет с тобой сегодня</span> :
        <span className="p-1 m-1 h5 text-white bg-primary rounded-3">{count} человек тусанет с тобой</span>;
    }

    let usersRender = users.map((item) => {
        return <tr  key={item.id}>
                    <th>{item.name}</th>
                    <td>{item.qualities.map(item => <span className={'rounded-3 m-1 small p-1 text-white bg-'+item.color}>{item.name}</span>)}</td>
                    <td>{item.profession.name}</td>
                    <td>{item.completedMeetings}</td>
                    <td>{item.rate}</td>
                    <td><button className="btn btn-danger m-1" onClick={() => {hendelDelet(item)}}>delete</button></td>
                </tr>
    })
    return(
        <>
            <div className="m-2">{formatCount()}</div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Всретился, раз</th>
                        <th scope="col">Отценки</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                    <tbody>
                        {usersRender}
                    </tbody>
            </table>
        </>
    )
};

export default Users;