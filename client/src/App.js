import React from 'react';
// import { Router } from '@reach/router';
// import Login from './components/Login';
// import RegisterUser from './components/RegisterUser';
import Signup from './components/Signup';
import { Container } from 'react-bootstrap';
import AuthProvider from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';


function App() {
  return (

    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <AuthProvider>

          <Router>
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route exact path="/"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route path="/update-profile"
                element={
                  <PrivateRoute>
                    <UpdateProfile />
                  </PrivateRoute>
                }
              />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route default path="/login" element={<Login />} />
            </Routes>
          </Router>
        </AuthProvider>

      </div>
    </Container>


    /* <Router>
      <Login path='/api/users/login'/>
      <RegisterUser path="/api/users/register"/>
    </Router> */
  )
}

export default App;
