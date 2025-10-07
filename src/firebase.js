import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// export const auth = getAuth(App);
const firebaseConfig = initializeApp({
  apiKey: import.meta.env.REACT_APP_API_KEY,
  authDomain: import.meta.env.REACT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_APP_APP_ID,
});

const app = firebaseConfig;
export default app;
export const auth = getAuth(app);
export const db = getFirestore(app);
