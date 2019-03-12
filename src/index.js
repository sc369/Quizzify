import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserAccess from './components/UserAccess';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <Router>
        <UserAccess />
    </Router>,
    document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
