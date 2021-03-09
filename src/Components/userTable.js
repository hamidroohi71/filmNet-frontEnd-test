import React, {useState , useEffect} from 'react';
import User from './user';

export default function UserTable() {
   const [error, setError] = useState(null);
   const [isLoaded,setIsLoaded] = useState(false);
   const [items,setItems] = useState([]);

   useEffect(() => {
     fetch("https://reqres.in/api/users?page=1").
     then(res => res.json()).
     then(
       (result) => {
         setIsLoaded(true);
         setItems(result.data)
       },
       (error) => {
         setIsLoaded(isLoaded);
         setError(error);
       }
     )
   },[])

   if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <table>
        <thead>
            <tr>
                <th>
                    "Avatar"
                </th>
                <th>
                    "First Name"
                </th>
                <th>
                    "Last Name"
                </th>
                <th>
                    "E-mail"
                </th>
                <th>
                    "Options"
                </th>
            </tr>
        </thead>
        <tbody>
            {items.map((item) =>(
                <User user={item} />
            ))
            }
        </tbody>
      </table>
    );
  }
  
}


