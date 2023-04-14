import 'firebase/firestore';
import firebase from 'firebase/compat/app'

firebase.initializeApp({
  // your Firebase config object
});

const firestore = firebase.firestore();

export { firestore };