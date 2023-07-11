import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA0ZCL5fhYgAe6shahDjB3o5Soim9C37P4",
    authDomain: "chekov-ad.firebaseapp.com",
    projectId: "chekov-ad",
    storageBucket: "chekov-ad.appspot.com",
    messagingSenderId: "84437595237",
    appId: "1:84437595237:web:f714d8de3b457bc9ee828c"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);// we need app inside for react-native