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
import FIREBASE from '../constants/firebase';

const useContact = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [data, setData] = React.useState(null);
    const [, database] = useFirebase();

    const toggleLoading = () => setIsLoading(!isLoading);

    const getData = async () => {
        try {
            toggleLoading();

            let docs = [];
            const ref = collection(database, FIREBASE.COLLECTION.USERS);
            const query = await getDocs(ref);

            query.forEach((doc) => docs.push({ ...doc.data(), id: doc.id, }));
            setData(docs);

            toggleLoading();

            return docs;
        }
        catch (error) {
            console.log('get contact data ->', error);
            toggleLoading();
        }
    };

    const createData = async(contactInfo = {}) => {
        try {
            toggleLoading();

            const ref = collection(database, FIREBASE.COLLECTION.USERS);
            const docData = await addDoc(ref, contactInfo);

            toggleLoading();

            return docData;
        }
        catch(error) {
            console.log('create contact data ->', error);
            toggleLoading();
        }
    };

    const updateData = async(id = '', contactInfo) => {
        try {
            toggleLoading();

            const ref = doc(database, FIREBASE.COLLECTION.USERS, id); 
            const docData = await updateDoc(ref, contactInfo);

            toggleLoading();

            return docData;
        }
        catch(error) {
            console.log('update contact data ->', error);
            toggleLoading();
        }
    };

    const deleteData = async(id = '') => {
        try {
            toggleLoading();

            const ref = doc(database, FIREBASE.COLLECTION.USERS, id); 
            const docData = await deleteDoc(ref);

            toggleLoading();
            
            return docData;
        }
        catch(error) {
            console.log('delete contact data ->', error);
            toggleLoading();
        }
    };

    return [
        getData,
        createData,
        updateData,
        deleteData,
        { isLoading, data },
    ];
};

export default useContact;