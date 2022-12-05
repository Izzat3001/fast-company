import React from "react";
import Qualities from "./qualities";

const User = ({
    id, name, rate, completedMeetings, profession, qualities, onDelet
}) => {

    let usersRender =
                <tr key={id}>
                    <td>{name}</td>
                    <td>{qualities.map(item => Qualities(item))}</td>
                    <td>{profession.name}</td>
                    <td>{completedMeetings}</td>
                    <td>{rate}</td>
                    <td><button className="btn btn-danger m-1" onClick={() => {onDelet(id)}}>delete</button></td>
                </tr>
  return usersRender
};

export default User


