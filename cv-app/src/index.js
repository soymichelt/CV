import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* UI Library */
import $  from 'jquery';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';

/* CSS */
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

$(document).ready(function() {
    $(".button-collapse").sideNav();
});