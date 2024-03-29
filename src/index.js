import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ApolloProvider from './ApolloProvider';
import React from "react";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./context";

ReactDOM.render( ApolloProvider
    

  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
