import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* Firebase */
import firebase from "firebase";

/* UI Library */
/*import $  from 'jquery';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';*/

/* CSS */
import './index.css';

/* Inicializando App Firebase */
import config from './firebaseCredentials';
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

/*$(document).ready(function() {
    $(".button-collapse").sideNav();
    $(".material-select").material_select();
    $(".scrollspy").scrollSpy({ scrollOffset: 60 });
});*/