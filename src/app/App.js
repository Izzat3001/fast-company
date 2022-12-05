import React, { useState } from "react";
import SearchStatus from "./components/searchStatus";
import Users from "./components/users";
// import User from "./components/user";
import api from "./api"
// import User from "./components/user";


function App () {
    const [users, setUsers] = useState(api.users.fetchAll());
    console.log(Users)
    // const hendelDelet = (userId) => {
    //     setUsers(prev)
    //     // const delUser = users.filter(item => item !== userId);
    //     // setUsers(delUser)
    //     console.log('delet',  userId)
    // };

//    let usersRender = <table className="table">
//         <thead>
//             <tr>
//                 <th scope="col">Имя</th>
//                 <th scope="col">Качества</th>
//                 <th scope="col">Профессия</th>
//                 <th scope="col">Всретился, раз</th>
//                 <th scope="col">Отценки</th>
//                 <th scope="col"></th>
//             </tr>
//         </thead>
//             <tbody>
            
//                 {users.map((item) => {
//                       return <tr  key={item.id}>
//                                     <th>{item.name}</th>
//                                     <th>{item.qualities.map(item => Qualities(item))}</th>
//                                     <td>{item.profession.name}</td>
//                                     <td>{item.completedMeetings}</td>
//                                     <td>{item.rate}</td>
//                                     <td><button className="btn btn-danger m-1" onClick={() => {hendelDelet(item)}}>delete</button></td>
//                                 </tr>
//                 })}
//         </tbody>
//     </table>
        console.log("eee")
    return(
        <>
            <div className="m-2">
                {SearchStatus(users)}
                {users.map(item => Users(item))}
                
            </div>
            
        </>
    )
}

export default App;