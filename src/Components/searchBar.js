import React, { useContext } from "react";
import {UserContext} from "./UsersPart";
import "./styles/searchBar.css";

export default function SearchBar() {

    const users = useContext(UserContext);
    return(
        <div className="SearchBar">
            <form>
                <input id="SearchBar" placeholder="Search the user ..." onChange={(e) => {users.userSearch(e.target.value)}} type="text"></input>
            </form>
        </div>
    )
}