import './App.css';
import Users from './components/users/Users';
import UserDetail from './components/users/UserDetail';
import {Routes, Route,Navigate} from 'react-router-dom';
import GlobleState from './context/GlobleState';
import React from 'react';


function App() {
  return (
    <div className="App">
      <h1>Users Table</h1>
       <GlobleState>
        <Routes>
          <Route path="/" element={<Navigate to="/users" />} />
          <Route index exact path='/users' element={<Users/>}/>
          <Route path='/users/:id' element={<UserDetail/>}/>
        </Routes>
      </GlobleState>
    </div>
  );
}

export default App;
