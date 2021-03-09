import React, { useState, useEffect } from "react";
import UserTable from "./userTable";
import Fuse from "fuse.js";

//Defining the context to have the userList anywhere in the project
export const UserContext = React.createContext([
]);

//fuse search config

//This function render the whole user part and it's options in the main page.
export default function UserPart(props) {
  const dataList = props.data;
  const [items, setItems] = useState(props.data);


  console.log(items);
  // setItems(props.data);


  useEffect(()=> {
    if(items.length == 0) {
      setItems(props.data); 
    }
  })
  

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
