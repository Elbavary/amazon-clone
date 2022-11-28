import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB7Q7whgS29XuLkES6vr0-FX4-DoZ7TW5E',
  authDomain: 'clone-368321.firebaseapp.com',
  projectId: 'amazon-clone-368321',
  storageBucket: 'amazon-clone-368321.appspot.com',
  messagingSenderId: '905425051261',
  appId: '1:905425051261:web:b1f04c38d5c7ad8fbd5b14',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
