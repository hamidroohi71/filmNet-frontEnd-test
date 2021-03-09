import React, { useState, useContext } from "react";
import {UserContext} from "./UsersPart";

export default function AddUser () {
    const users = useContext(UserContext);
    const lastId = users.userList.length;
    const [modal , setModal] = useState(false);
    const[fname, setFname] = useState('');
    const[lname, setLname] = useState('');
    const[mail, setMail] = useState('');

    function submitForm (event) {
        event.preventDefault();
        const newUser = {
            id: lastId + 1,
            email:mail,
            first_name: fname,
            last_name : lname,
            avatar : './'
        }
        users.userAdd(newUser);
    }
    
    return(
        <div>
            <button onClick={() => {modal ? setModal(false) : setModal(true)}}>Add New User</button>
            <div id="AddUserModal" className="AddUserModal" style={{display: modal ? 'block' : 'none'}}>
                <form onSubmit={submitForm}>
                    <label for="fname">First Name</label>
                    <input type="text" name="fname" onChange={(e) => {setFname(e.target.value)}}></input>
                    <label for="lname">Last Name</label>
                    <input type="text" name="lname" onChange={(e) => {setLname(e.target.value)}}></input>
                    <label for="mail">E-mail</label>
                    <input type="text" name="mail" onChange={(e) => {setMail(e.target.value)}}></input>
                    <input type="submit" value="save"></input>
                    <button onClick={()=> {modal ? setModal(false) : setModal(true)}}>cancel</button>
                </form>

            </div>
        </div>
    )
}