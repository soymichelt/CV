import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* Firebase */
import firebase from "firebase";

/* CSS */
import './index.css';

/* Inicializando App Firebase */
if(process.env.FIREBASE_API_KEY !== undefined) {
    var configProd = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
    };
    console.log(configProd);
    firebase.initializeApp(configProd);
}
else {
    var firebaseCredentials = require('./firebaseCredentials');
    firebase.initializeApp(firebaseCredentials.config);
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();