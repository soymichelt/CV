import firebase from 'firebase/app'
import 'firebase/firestore'

let _db

export const connect = (enablePersistence = false) => {

    if(enablePersistence) {
        firebase.firestore().enablePersistence()
        .then(function() {
            // Initialize Cloud Firestore through firebase
            _db = firebase.firestore()
        })
        .catch(function(err) {
            _db = firebase.firestore()
            if (err.code === 'failed-precondition') {
                // Multiple tabs open, persistence can only be enabled
                // in one tab at a a time.
                // ...
            } else if (err.code === 'unimplemented') {
                // The current browser does not support all of the
                // features required to enable persistence
                // ...
            }
        })
    }
    else {
        _db = firebase.firestore()
    }
}

export const getDb = () => {
    
    if(!_db) {
        connect(false);
    }

    return _db;

}