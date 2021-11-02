import React from 'react';
import {
    doc,
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
} from 'firebase/firestore';
import useFirebase from './useFirebase';
import { FIREBASE_ENV, } from '../constants/firebase';

const useContact = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [data, setData] = React.useState(null);
    const { database, } = useFirebase();

    const getData = async () => {
        try {
            setIsLoading(true);

            let docs = [];
            const ref = collection(database, FIREBASE_ENV.COLLECTION.USERS);
            const query = await getDocs(ref);

            query.forEach((doc) => docs.push({ ...doc.data(), id: doc.id, }));
            setData(docs);

            setIsLoading(false);

            return docs;
        }
        catch (error) {
            console.log('get contact data ->', error);
            setIsLoading(false);
        }
    };

    const createData = async (contactInfo = {}) => {
        try {
            setIsLoading(true);

            const ref = collection(database, FIREBASE_ENV.COLLECTION.USERS);
            const docData = await addDoc(ref, contactInfo);

            setIsLoading(false);

            return docData;
        }
        catch (error) {
            console.log('create contact data ->', error);
            setIsLoading(false);
        }
    };

    const updateData = async (id = '', contactInfo) => {
        try {
            setIsLoading(true);

            const ref = doc(database, FIREBASE_ENV.COLLECTION.USERS, id);
            const docData = await updateDoc(ref, contactInfo);

            setIsLoading(false);

            return docData;
        }
        catch (error) {
            console.log('update contact data ->', error);
            setIsLoading(false);
        }
    };

    const deleteData = async (id = '') => {
        try {
            setIsLoading(true);

            const ref = doc(database, FIREBASE_ENV.COLLECTION.USERS, id);
            const docData = await deleteDoc(ref);

            setIsLoading(false);

            return docData;
        }
        catch (error) {
            console.log('delete contact data ->', error);
            setIsLoading(false);
        }
    };

    return [
        {
            getData,
            createData,
            updateData,
            deleteData,
        },
        { isLoading, data },
    ];
};

export default useContact;