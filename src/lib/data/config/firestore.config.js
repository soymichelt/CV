import { initializeFirebaseApp } from './firebase.config';
import 'firebase/firestore';

export const db = initializeFirebaseApp().firestore();