import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Login from './Componets/Login';
import { FriendsList }  from './Componets/FriendsList';
import { AddFriend } from './Componets/AddFriend';
import { Logout } from './Componets/Logout';
import { PrivateRoutes } from './Componets/PrivateRoute';




function App() {

  

  return (
    <Router>
      <div className="App">
        <header>
          <h2>Friends Database</h2>
          
          <Link to="/" className='link' >Login</Link>
          <Link to="friends" className='link'>Friends</Link>
          <Link to="friends/add" className='link'>ADD Friends</Link>
          <Link to="/logout" className='link'>Logout</Link>
        </header>
        <Routes>
          <Route path='/' element={<Login />} />

          <Route element={<PrivateRoutes />}>
              <Route path='/friends' element={<FriendsList /> }  />
              <Route path='/friends/add' element={<AddFriend />} />
          </Route>

          

          <Route path='/logout' element={<Logout />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
