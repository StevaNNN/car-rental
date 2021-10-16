import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from './App';
import store from "./store";
import { CookiesProvider } from "react-cookie";
let packageJson = require('../package.json');
console.log(store.getState())
ReactDOM.render(
  <Provider store={store}>
    <Router basename={packageJson.homepage}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);