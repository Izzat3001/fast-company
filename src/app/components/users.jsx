import { useState } from "react";
import { paginate } from "../../paginate";
import Pagination from "./pagination";
import User from "./user";

const Users = ({ users, ...rest }) => {
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);

    const hendlePageChange = (pageIndex) => {
        console.log("Page", pageIndex);
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);

    return (
        <>
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
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={hendlePageChange}
            />
        </>
    );
};

export default Users;
