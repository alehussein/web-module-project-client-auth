import React, { useEffect, useState } from "react";
import axios from  'axios';

export const FriendsList = () => {

    const [friend, setFriends] = useState([]);

    useEffect(() => {
        
        const token = localStorage.getItem("token");
        axios.get("http://localhost:9000/api/friends", {
            headers: {
                authorization: token
            }
        })
        .then(res=>{
            setFriends(res.data);
            
        })
        .catch(err => console.log(err));
    }, []);

    return (
     <div className="friendlist">
    <h2>FRIEND LIST</h2>
    <ul>
    {
        friend.map((friend, idx) => {
            return <li key={idx}>{friend.name} - {friend.age} - {friend.email}</li>
        })
    }
    </ul>
    </div>
    )
  }