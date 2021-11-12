import './App.css';
import React, {useState} from 'react';
import {Router} from '@reach/router';
import Login from './components/Login';
import RegisterUser from './components/RegisterUser';

function App() {
  return (
    <div className="App">
      <h1>Carve</h1>
      <h3>The Ultimate Longboarding App</h3>
      <Router>
        <Login path='/api/users/login'/>
        <RegisterUser path="/api/users/register"/>
      </Router>
    </div>
  );
}

export default App;
