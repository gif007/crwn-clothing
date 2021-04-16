import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyApTB-Yg4lAZXPIcnCZlc0o7J1vAAZbW1k",
    authDomain: "crwn-db-8a8c3.firebaseapp.com",
    projectId: "crwn-db-8a8c3",
    storageBucket: "crwn-db-8a8c3.appspot.com",
    messagingSenderId: "786413332539",
    appId: "1:786413332539:web:d7fa632d1b97f0618b141e",
    measurementId: "G-EN3G0H83TM"
};

export const createUserProfileDocument = async (userAuth, otherData) => {
    if (!userAuth) {return;}

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

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

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;