import React, { useContext } from "react";
import User from "./user";
import {UserContext} from "./UsersPart";

export default function UserTable(props) {
    const users = useContext(UserContext);
  return (
    <table>
      <thead>
        <tr>
          <th>"Avatar"</th>
          <th>"First Name"</th>
          <th>"Last Name"</th>
          <th>"E-mail"</th>
          <th>"Options"</th>
        </tr>
      </thead>
      <tbody>
          {
              users.userList.map((item) => (
                  <User user={item} key={item.id} />
              ))
          }
      </tbody>
    </table>
  );
}
