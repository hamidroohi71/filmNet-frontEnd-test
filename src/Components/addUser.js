import React, { useState, useContext } from "react";
import {UserContext} from "./UsersPart";
import "./styles/addUser.css";

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
        debugger;
    }
    
    return(
        <div className="AddUser">
            <button onClick={() => {modal ? setModal(false) : setModal(true)}}>Add New User</button>
            <div id="AddUserModal" className="AddUserModal" style={{display: modal ? 'flex' : 'none'}}>
                <div>
                    <form onSubmit={submitForm}>
                        <label>First Name</label>
                        <input type="text" name="fname" onChange={(e) => {setFname(e.target.value)}}></input>
                        <label>Last Name</label>
                        <input type="text" name="lname" onChange={(e) => {setLname(e.target.value)}}></input>
                        <label>E-mail</label>
                        <input type="text" name="mail" onChange={(e) => {setMail(e.target.value)}}></input>
                        <div className="BtnContainer">
                            <input type="submit" value="save"></input>
                            <input type="reset" onClick={(e)=> {modal ? setModal(false) : setModal(true)}} value="cancel"/>
                        </div>
                    </form>
                </div>
                

            </div>
        </div>
    )
}