import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDI-SJqkjUxvUDwp-BNRV6N8KomcEB87N8',
  authDomain: 'blog-using-hooks.firebaseapp.com',
  projectId: 'blog-using-hooks',
  storageBucket: 'blog-using-hooks.appspot.com',
  messagingSenderId: '244121552301',
  appId: '1:244121552301:web:34d352f6f611e5d4c78d24',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
