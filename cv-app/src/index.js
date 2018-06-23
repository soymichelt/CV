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
const config = {
    apiKey: "AIzaSyCtpa-R4jkHLTsaEphnCNhdHjpULqZ4M1E",
    authDomain: "mtraatabladaa.firebaseapp.com",
    databaseURL: "https://mtraatabladaa.firebaseio.com",
    projectId: "mtraatabladaa",
    storageBucket: "mtraatabladaa.appspot.com",
    messagingSenderId: "217863552976"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

/*$(document).ready(function() {
    $(".button-collapse").sideNav();
    $(".material-select").material_select();
    $(".scrollspy").scrollSpy({ scrollOffset: 60 });
});*/