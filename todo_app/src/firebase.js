// const firebaseConfig = {
//     apiKey: "AIzaSyBaWGxxwCZv_8BNv7vC2Wf_ce-BtxqfV0c",
//     authDomain: "todo-app-cp-3be64.firebaseapp.com",
//     projectId: "todo-app-cp-3be64",
//     storageBucket: "todo-app-cp-3be64.appspot.com",
//     messagingSenderId: "1074773769746",
//     appId: "1:1074773769746:web:9af8a232ecdb2c1bd5a2cb",
//     measurementId: "G-XT84BZPH1R"
//   };
  import firebase from "firebase";
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCZX3DCigtxxchSI7HaoJe-jYM5wFDu6bs",
  authDomain: "global-anonymous-messaging.firebaseapp.com",
  projectId: "global-anonymous-messaging",
  storageBucket: "global-anonymous-messaging.appspot.com",
  messagingSenderId: "95724491971",
  appId: "1:95724491971:web:42f0645d5fbb3d66ddfe76",
  measurementId: "G-9H3PL5RMR6"
  });
const db = firebaseApp.firestore();
export default db;