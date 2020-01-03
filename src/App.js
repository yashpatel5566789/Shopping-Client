import React, { Component }from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Header from "./components/Forms/Header"
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';
import ProductList from "./components/ProductList";

import Login from './pages/Login';
import Register from './pages/Register';
import Cart from '../src/components/Cart/Cart';



function App() {
  return (
    <AuthProvider>
      <React.Fragment>
      <Router>
      <Switch>
        <Container>
          <Header />
          <Route exact path="/" component={ProductList} />
          <Route exact path="/cart" component={Cart} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />

        </Container>
        </Switch>
      </Router>
      </React.Fragment>
    </AuthProvider>
  );
}

export default App;
