import React from 'react';
import { collection, getDocs, } from 'firebase/firestore';
import useFirebase from './useFirebase';
import FIREBASE from '../constants/firebase';

const useContact = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [data, setData] = React.useState(null);
    const [, database] = useFirebase();

    const getData = async () => {
        setIsLoading(true);

        try {
            let docs = [];
            const query = await getDocs(collection(database, FIREBASE.COLLECTION.USERS));

            query.forEach((doc) => docs.push({ ...doc.data(), id: doc.id, }));
            setData(docs);
        }
        catch (error) {
            console.log(error);
        }

        setIsLoading(false);
    };

    const createData = async() => {

    };

    return [
        getData,
        { isLoading, data }
    ];
};

export default useContact;