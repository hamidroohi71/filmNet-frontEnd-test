import React, { useState, useContext } from "react";
import {UserContext} from "./UsersPart";

export default function EditUser(props) {
    const users = useContext(UserContext);
    const[fname, setFname] = useState('');
    const[lname, setLname] = useState('');
    const[mail, setMail] = useState('');
    let statue = props.statue;
    let modalId = "EditUserModal" + props.id;

    function submitForm (event) {
        event.preventDefault();
        const newUser = {
            id: props.id,
            email:mail,
            first_name: fname,
            last_name : lname,
            avatar : props.avatar
        }
        props.hideModal();
        users.userEdit(props.index ,newUser);

    }
    
    return(
        <div className="EditUserModal" id={modalId} style={{display: statue=='shown' ? 'flex' : 'none'}}>
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
                        <input type="reset" onClick={(e)=> {e.preventDefault(); props.hideModal()}} value="cancel"/>
                    </div>
                </form>

            </div>
        </div>
    )
}