import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCeZHz_Swlwd-CE7m32asRN1HE_tD_KU0c",
    authDomain: "tinder-clone-f5bcf.firebaseapp.com",
    databaseURL: "https://tinder-clone-f5bcf.firebaseio.com",
    projectId: "tinder-clone-f5bcf",
    storageBucket: "tinder-clone-f5bcf.appspot.com",
    messagingSenderId: "809368225461",
    appId: "1:809368225461:web:10e34211873a23dbe920fc",
    measurementId: "G-63VQNJBS09",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;