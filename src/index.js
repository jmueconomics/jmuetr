import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app"
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter} from "react-router-dom";
require('dotenv').config();

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
