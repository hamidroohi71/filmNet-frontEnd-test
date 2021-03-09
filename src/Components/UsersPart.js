import React, { useState, useEffect } from "react";
import UserTable from "./userTable";
import Fuse from "fuse.js";
import SearchBar from "./searchBar";
import AddUser from "./addUser";
import DeletModal from "./deletConfirm";

//Defining the context to have the userList anywhere in the project
export const UserContext = React.createContext({
  userList: [],
  userSearch: () => {},
  userAdd: () => {},
  userDelete: () => {},
  userEdit: () => {}
});

//This function render the whole user part and it's options in the main page.
export default function UserPart(props) {
  const dataList = props.data;
  const [items, setItems] = useState(props.data);
  let context;

  useEffect(() => {
    if (items.length == 0) {
      setItems(props.data);
    }
  });

  //search function
  const searchUsers = (phrase) => {
    const options = {
      includeMatches: true,
      findAllMatches: true,
      keys: ["first_name", "last_name"],
    };
    const fuse = new Fuse(items, options);
    let result;
    if (phrase && phrase != "") {
      result = fuse.search(phrase);
      let newResult = [];
      for (const element of result) {
        newResult.push(element.item);
      }
      result = newResult;
    } else {
      result = props.data;
    }
    setItems(result);
  };

  //Add function
  const addUser = (userIdentity) => {
    let newList = items;
    newList.push(userIdentity);
    setItems([...newList]);
  };

  //delete fuction
  const deleteUser = (index) => {
    let newList = items;
    newList.splice(index, 1);
    setItems([...newList]);
  };

  //Edit function
  const editUser = (index , edittedUser) => {
    let newList = items;
    newList[index] = edittedUser;
    setItems([...newList]);
  }

  //Set the context valuse
  context = {
    userList: items,
    userSearch: searchUsers,
    userAdd: addUser,
    userDelete: deleteUser,
    userEdit: editUser
  };

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
