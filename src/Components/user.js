import React from 'react';

export default function User(props) {
    return (
        <>
        <tr>
            <td>
                <img src={props.image} />
            </td>
            <td>
                {props.fname}
            </td>
            <td>
                {props.lname}
            </td>
            <td>
                {props.mail}
            </td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
        </>
    )
}