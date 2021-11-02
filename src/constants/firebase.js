export const FIREBASE_ENV = {
    API_KEY: process.env.REACT_APP_API_KEY,
    DOMAIN: process.env.REACT_APP_DOMAIN,
    DATABASE_URL: process.env.REACT_APP_DATABASE_URL,
    PROJECT_ID: process.env.REACT_APP_PROJECT_ID,
    STORAGE_BUCKET: process.env.REACT_APP_STORAGE_BUCKET,
    SENDER_ID: process.env.REACT_APP_SENDER_ID,
    COLLECTION: {
        USERS: 'users',
    },
};

export const FIREBASE_CONFIG = {
    apiKey: FIREBASE_ENV.API_KEY,
    authDomain: FIREBASE_ENV.DOMAIN,
    databaseURL: FIREBASE_ENV.DATABASE_URL,
    projectId: FIREBASE_ENV.PROJECT_ID,
    storageBucket: FIREBASE_ENV.STORAGE_BUCKET,
    messagingSenderId: FIREBASE_ENV.SENDER_ID,
};