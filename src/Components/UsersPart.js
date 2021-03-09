import React, { useState, useEffect } from "react";
import UserTable from "./userTable";
import Fuse from "fuse.js";
import SearchBar from "./searchBar";
import AddUser from "./addUser";

//Defining the context to have the userList anywhere in the project
export const UserContext = React.createContext({
  userList: [],
  userSearch: () => {},
  userAdd: () => {}
});

//fuse search config

//This function render the whole user part and it's options in the main page.
export default function UserPart(props) {
  const dataList = props.data;
  const [items, setItems] = useState(props.data);
  let context = {
    userList: items,
    userSearch: searchUsers,
    userAdd: addUser
  };

  
  useEffect(() => {
    if (items.length == 0) {
      setItems(props.data);
    }
    context = {
      userList: items,
      userSearch: searchUsers,
      userAdd: addUser
    }
  });


  //search function
  function searchUsers(phrase) {
    const options = {
      includeMatches: true,
      findAllMatches: true,
      keys: ["first_name", "last_name"],
    };
    const fuse = new Fuse(dataList, options);
    let result;
    if (phrase && phrase != "") {
      result = fuse.search(phrase);
      let newResult=[];
      for(const element of result) {
        newResult.push(element.item);
      }
      result = newResult;
    } else {
      result = props.data;
    }
    setItems(result);
  }

  //Add function
  function addUser(userIdentity) {
    let newList = dataList;
    newList.push(userIdentity);
    setItems([...newList]);
  }


  //delet fuction 
  function deleteUser(id) {


  }

  //Set the context valuse
  
  {
    return (
      <UserContext.Provider value={context}>
        <SearchBar />
        <UserTable />
        <AddUser />
      </UserContext.Provider>
    );
  }
}
