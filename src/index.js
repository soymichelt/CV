import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* Firebase */
import firebase from "firebase";

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