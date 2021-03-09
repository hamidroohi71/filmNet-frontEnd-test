import React, { useContext } from "react";
import { UserContext } from "./UsersPart";

export default function DeletModal(props) {
    const users = useContext(UserContext);

    return(
        <div>
            <p>Do you really want to delete this user?</p>
            <button>yes</button> 
        </div>
    )
}