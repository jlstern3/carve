import './App.css';
import React, {useState} from 'react';
import {Router} from '@reach/router';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <h1>Carve</h1>
      <h3>The Ultimate Longboarding App</h3>
      <Router>
        <Login path='/api/users/login'/>
      </Router>
    </div>
  );
}

export default App;
