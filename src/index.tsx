import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
// @ts-ignore
let packageJson =  require('../package.json');

ReactDOM.render(
  <BrowserRouter
    basename={packageJson.homepage}
  >
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);