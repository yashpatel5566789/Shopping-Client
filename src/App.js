import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Header from "./components/Forms/Header"
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';


import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <Header />

          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />

        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
