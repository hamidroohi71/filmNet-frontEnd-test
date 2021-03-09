import React, { useState, useEffect } from "react";
import UserTable from "./userTable";
import Fuse from "fuse.js";

//Defining the context to have the userList anywhere in the project
export const UserContext = React.createContext([
    
]);

//fuse search config

//This function render the whole user part and it's options in the main page.
export default function UserPart(props) {
  const [items, setItems] = useState(props.data);
  const dataList = props.data;

  function searchUsers(phrase) {
    const options = {
      keys: ["first_name", "last_name"],
    };
    const fuse = new Fuse(dataList, options);
    const result = fuse.search(phrase);
    setItems(result);
  }

  {
    return (
      <UserContext.Provider value={items}>
        <UserTable />
      </UserContext.Provider>
    );
  }
}
