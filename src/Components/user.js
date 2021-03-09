import React, { useContext, useState } from "react";
import EditUser from "./editUser";
import {UserContext} from "./UsersPart";

export default function User(props) {
    let user = props.user;
    const users = useContext(UserContext);
    console.log(props.index);
    const [modal,setModal] = useState(false);
    function hideModal() {
        setModal(false);
    }

    return (
        <>
        <tr>
            <td>
                <img src={user.avatar} />
            </td>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
            <td>
                {user.email}
            </td>
            <td className="Options">
                <button onClick={(e) => {e.preventDefault(); setModal(true)}} >Edit</button>
                <button onClick={(e)=> {e.preventDefault(); users.userDelete(props.index)}}>Delete</button>
            </td>
            <td className="ModalTD">
                <EditUser statue={modal ? 'shown' : 'hidden'} hideModal={hideModal} index={props.index} avatar={user.avatar} id={user.id} />
            </td>
        </tr>
        </>
    )
}