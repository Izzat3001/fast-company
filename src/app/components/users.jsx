import { useState, useEffect } from "react";
import { paginate } from "../../utils/paginate";
import GruopList from "./groupList";
import Pagination from "./pagination";
import api from "../api";
import User from "./user";
import SearchStatus from "./searchStatus";

const Users = ({ users: allUsers, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [profession, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const pageSize = 2;

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

    const filteredUsers = selectedProf
        ? allUsers.filter((user) => user.profession.name === selectedProf)
        : allUsers;
    const count = filteredUsers.length;
    const userCrop = paginate(filteredUsers, currentPage, pageSize);
    const filterClear = () => {
        setSelectedProf();
    };
    // console.log("currentPage", currentPage);
    // console.log("userCrop", userCrop);
    // console.log("count", count);
    // console.log("filteredUsers", filteredUsers);
    // console.log("allUsers", allUsers);
    // console.log("profession", profession);
    // console.log("selectedProf", selectedProf);

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
                {count > 0 && (
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Имя</th>
                                <th scope="col">Качества</th>
                                <th scope="col">Профессия</th>
                                <th scope="col">Всретился, раз</th>
                                <th scope="col">Отценки</th>
                                <th scope="col">Избранное</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {userCrop.map((user) => {
                                return <User key={user._id} {...user} {...rest} />;
                            })}
                        </tbody>
                    </table>
                )}
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
};

export default Users;
