import React, { useContext } from "react";
import User from "./user";
import { UserContext } from "./UsersPart";
import "./styles/userTable.css";

export default function UserTable(props) {
  const users = useContext(UserContext);
  let i = -1;
  return (
    <table className="UserTable">
      <thead>
        <tr>
          <th>Avatar</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>E-mail</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {users.userList.map((item) => {
          i++;
          return <User user={item} key={item.id} index={i} />;
        })}
      </tbody>
    </table>
  );
}
