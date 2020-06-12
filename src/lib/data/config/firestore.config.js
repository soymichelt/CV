import { initializeFirebaseApp } from './firebase.config';
import 'firebase/firestore';

initializeFirebaseApp();

export const db = firebase.firestore();