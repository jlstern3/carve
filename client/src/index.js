import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from './contexts/AuthContext';
import { BrowserRouter as Router  } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
        <AuthProvider>
          <Router>
    <App />
    </Router>

</AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);