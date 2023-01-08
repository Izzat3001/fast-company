import { useState, useEffect } from "react";
import { paginate } from "../../utils/paginate";
import GruopList from "./groupList";
import Pagination from "./pagination";
import api from "../api";
import UserTable from "./usersTable";
import _ from "lodash";
import SearchStatus from "./searchStatus";

const Users = () => {
    const [users, setUsers] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [profession, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });
    const pageSize = 8;

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

    useEffect(() => {
        api.profession.fetchAll().then((data) => setProfessions(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const hendleProfessionSelect = (item) => {
        console.log("hendle", item);
        setSelectedProf(item);
    };

    const hendlePageChange = (pageIndex) => {
        console.log("Page", pageIndex);
        setCurrentPage(pageIndex);
    };

    const hendleSort = (item) => {
        setSortBy(item);
    };

    if (users) {
        const filteredUsers = selectedProf
            ? users.filter((user) => user.profession.name === selectedProf)
            : users;
        const count = filteredUsers.length;
        const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
        const userCrop = paginate(sortedUsers, currentPage, pageSize);
        const filterClear = () => {
            setSelectedProf();
        };
        // console.log("currentPage", currentPage);
        // console.log("userCrop", userCrop);
        // console.log("count", count);
        // console.log("filteredUsers", filteredUsers);
        // console.log("users", users);
        // console.log("profession", profession);
        // console.log("selectedProf", selectedProf);
        // console.log("sortedUsers", sortedUsers);

        return (
            <div className="d-flex">
                {profession && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GruopList
                            selectedItem={selectedProf}
                            items={profession}
                            onItemSelect={hendleProfessionSelect}
                        />
                        <button
                            className="btn mt-2 btn-danger"
                            onClick={filterClear}
                        >
                            Очистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <SearchStatus length={count} />
                    {count > 0 &&
                        <UserTable
                            users={userCrop}
                            onSort={hendleSort}
                            selectedSort={sortBy}
                            onDelet={handleDelete}
                            onBookmark={hendleToggleBookMark}
                        />}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={hendlePageChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="d-flex justify-content-center m-5">
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Загрузка...</span>
            </div>
        </div>
    );
};

export default Users;
