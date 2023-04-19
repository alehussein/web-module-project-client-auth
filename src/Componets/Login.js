import React, {useState} from  'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


 const Login = () => {
    
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    
    const [credencials, setCredencials] = useState({
        username:"",
        password:""
    });
    
    const handleChange = (e) =>{
        setCredencials({
            ...credencials,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9000/api/login", credencials)
        .then(res => {
            console.log("Message", res);
            localStorage.setItem("token", res.data.token);
            navigate('/friends');
        })
        .catch(err => {
        
        setErrorMessage(err.response.data.error);
        });
    }
    
    return (
      <div className='login-form'>
        <h2>LOGIN</h2>
        <form>
          <div className='username'>
          <label>USERNAME</label>
          <input id='username' onChange={handleChange} name="username"></input>
          </div>
          <div className='password'>
          <label>PASSWORD</label>
          <input type='password' id='password' onChange={handleChange} name="password"></input>
          </div>
        </form>
        <button onClick={handleSubmit}>SUBMIT</button>
        <div className='error-message'>{errorMessage}</div>
        </div>
    )
    
  }

  export default Login