import React from "react";
import Qualities from "./qualities";
import BookMark from "./bookmark";

const User = ({
    _id, name, rate, completedMeetings, profession, qualities, onDelet, bookmark, onBookmark
}) => {
    console.log(bookmark)
    return( 
            <>
                <tr key={_id}>
                    <td>{name}</td>
                    <td>{qualities.map(item => Qualities(item))}</td>
                    <td>{profession.name}</td>
                    <td>{completedMeetings}</td>
                    <td>{rate}</td>
                    <td><span onClick={() => onBookmark(_id)}>{BookMark(bookmark)}</span></td>
                    <td><button className="btn btn-danger m-1" onClick={() => onDelet(_id)}>delete</button></td>
                </tr>
            </>
        ) 
  
};

export default User


