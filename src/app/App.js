import React, { useState, useEffect } from "react";
import Users from "./components/users";
import api from "./api";

function App() {
    const [users, setUsers] = useState([]);
    const handleDelete = (userId) => {
        const delUser = users.filter((item) => item._id !== userId);
        setUsers(delUser);
    };

    const hendleToggleBookMark = (id) => {
        const toggleBookMark = users.map((item) =>
            item._id === id ? { ...item, bookmark: !item.bookmark } : item
        );
        setUsers(toggleBookMark);
    };

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    return (
        <>
            <div className="m-2">
                <Users
                    users={users}
                    onDelet={handleDelete}
                    onBookmark={hendleToggleBookMark}
                />
            </div>
        </>
    );
}

export default App;
