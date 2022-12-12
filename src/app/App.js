import React, { useState } from "react";
import SearchStatus from "./components/searchStatus";
import Users from "./components/users";
import api from "./api"



function App () {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) => {
        const delUser = users.filter(item => item._id !== userId);
        setUsers(delUser)
    };

    const hendleToggleBookMark = (id) => {
        console.log( "bookmark", id)
        const toggleBookMark = users.filter(item => item._id === id
            ? {...item, bookmark: item.bookmark = true}
            : item
            );
            setUsers(toggleBookMark)
    }
    return(
        <>
            <div className="m-2">
                <SearchStatus length={users.length} />
                <Users 
                    users={users}
                    onDelet={handleDelete} 
                    onBookmark={hendleToggleBookMark}
                />
                
            </div>
            
        </>
    )
}

export default App;