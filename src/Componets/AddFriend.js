import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";



export const AddFriend = () => {
    const navigate = useNavigate();

    const[form, setForm] = useState({
        name:'',
        age:'',
        email:'',
    });

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
            
        });
    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        axios.post("http://localhost:9000/api/friends", form, {
            headers: {
                authorization: token
            }
        })
        .then(res => {
            navigate('/friends');
        })
        .catch(err => console.log(err))
    }


    return (
        <div className='add-form'>
        <h2>ADD FRIEND</h2>
        <form>
          <div className='friend-name'>
          <label>FRIEND NAME</label>
          <input id='friend-name' onChange={handleChange} name='name'></input>
          </div>
          <div className='age'>
          <label>AGE</label>
          <input type='text' id='age' onChange={handleChange} name='age'></input>
          </div>
          <div className='email'>
          <label>EMAIL</label>
          <input type='email' id='email' onChange={handleChange} name='email'></input>
          </div>
        </form>
        <button onClick={handleSubmit}>SUBMIT</button>
        </div>
    )
  }