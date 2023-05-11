import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from 'expo-constants';


const firebaseConfig = {
    apiKey: Constants.manifest.extra.apiKey,
      authDomain: Constants.manifest.extra.AUTH_DOMAIN,
      projectId: Constants.manifest.extra.PROJECT_ID,
      storageBucket: Constants.manifest.extra.STORAGE_BUCKET,
      messagingSenderId: Constants.manifest.extra.MESSAGING_SENDER_ID,
      appId: Constants.manifest.extra.APP_ID,
      databaseURL: Constants.manifest.extra.databaseURL
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();