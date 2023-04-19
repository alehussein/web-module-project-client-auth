import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    useEffect(() => {
        
        const token = localStorage.getItem("token");
        axios.post('http://localhost:9000/api/logout', {}, {
            headers:{
                authorization: token
            }
        })
        .then(res =>{
            console.log(res);
            localStorage.removeItem('token')
            navigate('/')
        })
        .catch(err => {
            // console.log(err);
        setError(err.response.data.error)})
    })
    return (<div className='logout'>
        <h2>LOGOUT</h2>
        <div className='error-message'>{error}</div>
        </div>)
}