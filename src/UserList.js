
import React, { useEffect, useState } from "react";

const UserList = () => {
    const [data, setData] = useState([1])
 

    useEffect(() => {
        function fetchData() {
          fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(res => setData(res))
            
        }
     
        fetchData();
      }, [data]);
     
      return (
        <div>
        
            {data.map(user => (
              
              
             <ul>
                 <li>
                 {user.name}{user.username}{user.email}
                 </li>

             </ul>
                  
            ))}
          
        </div>
      );
     };

export default UserList

