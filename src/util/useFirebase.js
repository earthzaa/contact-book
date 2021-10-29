import { initializeApp, } from 'firebase/app';
import { getFirestore, } from 'firebase/firestore';
import FIREBASE from '../constants/firebase';

const config = {
    apiKey: FIREBASE.API_KEY,
    authDomain: FIREBASE.DOMAIN,
    databaseURL: FIREBASE.DATABASE_URL,
    projectId: FIREBASE.PROJECT_ID,
    storageBucket: FIREBASE.STORAGE_BUCKET,
    messagingSenderId: FIREBASE.SENDER_ID,
};

export default function useFirebase() {
    const firebase = initializeApp(config);
    const database = getFirestore();

    return [
        firebase,
        database,
    ]
};