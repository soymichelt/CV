const firebase = require('firebase');

const functions = require('firebase-functions');

const admin = require('firebase-admin');

const firestore = require('firebase/firestore');

admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// Incrementar el contador de Estudios al crear un nuevo Favs.
exports.updateAcademicFavs = functions.firestore
.document('studies/{studieId}/favs/{favId}')
.onCreate((snapshot, context) => {

    const studieId = context.params.studieId;

    studie = admin.firestore().collection('studies').doc(studieId);
    
    studie.update({
        favsCount: studie.favsCount + 1,
    })
    .then((docRef) => {
        console.log(docRef);
    })
    .catch((error) => {
        console.error('Error al incrementar el favsCount del Studie "' + studieId + '". ', error);
    });

});

// Incrementar el contador de Estudios al crear un nuevo Shares.
exports.updateStudieShares = functions.firestore
.document('studies/{studieId}/shares/{shareId}')
.onCreate((snapshot, context) => {

    const studieId = context.params.studieId;

    studie = admin.firestore().collection('studies').doc(studieId);

    studie.update({
        sharesCount: studie.sharesCount + 1,
    })
    .then((docRef) => {
        console.log(docRef);
    })
    .catch((error) => {
        console.error('Error al incrementar el sharesCount del Studie "' + studieId + '". ', error);
    });

});

// Incrementar el contador de Proyectos al crear un nuevo Favs.
exports.updateProjectFavs = functions.firestore
.document('projects/{projectId}/favs/{favId}')
.onCreate((snapshot, context) => {

    const projectId = context.params.projectId;

    const project = admin.firestore().collection('projects').doc(projectId);

    project.update({
        favsCount: project.favsCount + 1,
    })
    .then((docRef) => {
        console.log(docRef);
    })
    .catch((error) => {
        console.error('Error al incrementar el favsCount del Project "' + projectId + '". ', error);
    });
    
});

// Incrementar el contador de Proyectos al crear un nuevo Shares.
exports.updateProjectShares = functions.firestore
.document('projects/{projectId}/shares/{shareId}')
.onCreate((snapshot, context) => {

    const projectId = context.params.projectId;

    const project = admin.firestore().collection('projects').doc(projectId);

    project.update({
        sharesCount: project.sharesCount + 1,
    })
    .then((docRef) => {
        console.log(project);
    })
    .catch((error) => {
        console.error('Error al incrementar el sharesCount del Project "' + projectId + '". ', error);
    });

});