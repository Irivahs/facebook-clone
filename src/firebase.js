import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_8R94aqMANK15Hgfrtd-7-DcosHCugAI",
    authDomain: "fbclone-app.firebaseapp.com",
    databaseURL: "https://fbclone-app.firebaseio.com",
    projectId: "fbclone-app",
    storageBucket: "fbclone-app.appspot.com",
    messagingSenderId: "1047225072724",
    appId: "1:1047225072724:web:91e047268a72a13bd941c1",
    measurementId: "G-MWYHVMN2DT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;