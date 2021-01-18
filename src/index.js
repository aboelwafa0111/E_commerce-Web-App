import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import { BrowserRouter as Router } from "react-router-dom";
import './components/index.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.querySelector("#root")
);