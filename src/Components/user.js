import React from 'react';

export default function User(props) {
    let user = props.user;
    return (
        <>
        <tr>
            <td>
                <img src={user.avatar} />
            </td>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
            <td>
                {user.email}
            </td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
        </>
    )
}