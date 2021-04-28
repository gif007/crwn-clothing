// import main firebase library
import firebase from 'firebase/app';
// import firestore API
import 'firebase/firestore';
// import OAuth API
import 'firebase/auth';

// configuration object obtained from firebase console
const config = {
    apiKey: "AIzaSyApTB-Yg4lAZXPIcnCZlc0o7J1vAAZbW1k",
    authDomain: "crwn-db-8a8c3.firebaseapp.com",
    projectId: "crwn-db-8a8c3",
    storageBucket: "crwn-db-8a8c3.appspot.com",
    messagingSenderId: "786413332539",
    appId: "1:786413332539:web:d7fa632d1b97f0618b141e",
    measurementId: "G-EN3G0H83TM"
};

// export an asynchronous function which creates a firestore user object
// if one does not exist and returns a reference to a firestore user object
// based on the userAuth object returns by the OAuth api
export const createUserProfileDocument = async (userAuth, otherData) => {
    if (!userAuth) {return;} // if no valid userAuth, abort

     // get a firestore reference using userAuth.uid
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // request snapshot for current reference
    const snapShot = await userRef.get(); 

    // if no snapshot exists, create one using userAuth
    if(!snapShot.exists) { 
        // grab displayName and email from userAuth
        const { displayName, email } = userAuth;
        // create new timestamp
        const createdAt = new Date();

        // attempt to create the snapshot
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...otherData
            })
        } catch (err) {
            console.log('error creating user', err.message);
        }
    }

    // return the firestore reference based on userAuth.uid
    // which should now have a snapshot associated with it
    return userRef;
};

// async function which uploads a collection and its related docs to firestore
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    // create a reference in the firestore to a new collection
    const collectionRef = firestore.collection(collectionKey);

    // create a firestore batch object
    const batch = firestore.batch();
    // populate batch object with set calls for each document
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    });

    // call batch and return a promise
    return await batch.commit();
};


export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            title,
            items,
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
};

firebase.initializeApp(config); // initialize app with firebase configuration settings

export const auth = firebase.auth(); // export OAuth API
export const firestore = firebase.firestore(); // export firestore API

// create a Good signin provider
const provider = new firebase.auth.GoogleAuthProvider();
// select prompt parameter on provider
provider.setCustomParameters({ prompt: 'select_account' });
// export function which triggers Google signin popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;