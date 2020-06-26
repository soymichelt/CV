/*require('ignore-styles');

require('@babel/register')({
    ignore: [/(node_modules)/],
    presets: [
        '@babel/preset-env',
        '@babel/preset-react'
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-class-properties',
    ],
});

require('asset-require-hook')({
    extensions: [
        'jpg',
        'png',
        'gif',
    ],
    name: '/assets/res/[name].[ext]',
});

const {ssrApp} = require('./ssr-app.function');

exports.ssrApp = ssrApp;*/

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

exports.postCreated = functions
                    .firestore.document('posts/{postId}')
                    .onCreate((snap, context) => {
    db.collection('postsBit').add({
        date: '25-06-2020',
        author: 'Michel Traña',
        postId: postId,
    });
});