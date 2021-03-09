import React, { useState, useEffect } from "react";
import UserTable from "./userTable";

//Defining the context to have the userList anywhere in the project
export const UserContext = React.createContext([]);

//This function render the whole user part and it's options in the main page.
export default function UserPart() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    //Requesting the api to recieve the users data
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
        },
        (error) => {
          setIsLoaded(isLoaded);
          setError(error);
        }
      );
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <UserContext.Provider value={items}>
        <UserTable />
      </UserContext.Provider>
    );
  }
}
