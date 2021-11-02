import React from 'react';
import { initializeApp, } from 'firebase/app';
import { getFirestore, } from 'firebase/firestore';
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
} from 'firebase/storage';
import { FIREBASE_CONFIG, } from '../constants/firebase';

const useFirebase = () => {
    const [isLoading, setIsLoading] = React.useState();

    const firebase = initializeApp(FIREBASE_CONFIG);
    const database = getFirestore();
    const storage = getStorage();

    const uploadImage = async (
        imageUrl = '',
        parentName = 'images',
        imageName = new Date().getTime().toString(),
        imageType = 'jpeg',
    ) => {
        try {
            setIsLoading(true);

            const fullPath = `${parentName}/${imageName}.${imageType}`
            const metadata = { contentType: `image/${imageType}`, };
            const storageRef = ref(storage, fullPath);

            await uploadBytes(storageRef, imageUrl, metadata);

            const url = getDownloadURL(storageRef);

            setIsLoading(false);

            return url;
        }
        catch (error) {
            console.log('upload image ->', error);

            return error;
        }
    };

    return {
        firebase,
        database,
        storage,
        uploadImage,
        isLoading,
    };
};

export default useFirebase;