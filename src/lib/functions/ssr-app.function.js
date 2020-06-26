import * as functions from 'firebase-functions';
import {app} from './../../server/server';

export let ssrApp = functions.https.onRequest(app());