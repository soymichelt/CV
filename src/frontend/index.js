import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { App } from './app';

const history = createBrowserHistory();

ReactDOM.hydrate(
    <Router history={history}>
        <App />
    </Router>
    ,
    document.getElementById('root')
);