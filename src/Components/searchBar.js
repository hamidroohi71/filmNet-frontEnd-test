import React, { useContext } from "react";
import {UserContext} from "./UsersPart";

export default function SearchBar() {

    const users = useContext(UserContext);
    return(
        <form>
            <input id="SearchBar" onChange={(e) => {users.userSearch(e.target.value)}} type="text"></input>
        </form>
    )
}