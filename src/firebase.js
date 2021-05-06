import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCBcRQejNmPqKC5UJEI919kZZ-rbt9530s",
    authDomain: "tinder-clone-17c57.firebaseapp.com",
    projectId: "tinder-clone-17c57",
    storageBucket: "tinder-clone-17c57.appspot.com",
    messagingSenderId: "457398253267",
    appId: "1:457398253267:web:beaf13ed56af3c679c8626"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;  