import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from './App';
import store from "./store";
let packageJson = require('../package.json');

ReactDOM.render(
  <Provider store={store}>
    <Router basename={packageJson.homepage}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);