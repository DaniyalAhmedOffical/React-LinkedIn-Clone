import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBclELSHeJrr-BonTpvOHyQfI7HfqwJVVQ",
    authDomain: "linkedin-clone-b5101.firebaseapp.com",
    projectId: "linkedin-clone-b5101",
    storageBucket: "linkedin-clone-b5101.appspot.com",
    messagingSenderId: "248963070358",
    appId: "1:248963070358:web:e674f3a4daa64038f485b7"
  };

// this line of code here connect everthing
  const firebaseApp = firebase.initializeApp(firebaseConfig)

// get the firebase database
  const db = firebaseApp.firestore();

  // we want to use firebase authentication
  const auth = firebase.auth();
    
  export { db, auth }


  
  // firebas par host kiya tha us ka link ha ye save yaha kiya ha 
    // Hosting URL: https://linkedin-clone-b5101.web.app
