import React, { useState } from 'react';
import { Router } from '@reach/router';
// import Login from './components/Login';
// import RegisterUser from './components/RegisterUser';
import Signup from './components/Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Signup />
      </div>
    </Container>

    /* <Router>
      <Login path='/api/users/login'/>
      <RegisterUser path="/api/users/register"/>
    </Router> */
  )
}

export default App;
