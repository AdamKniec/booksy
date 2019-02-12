import firebase from 'firebase/app'; //o co kaman

var config = {
    apiKey: "AIzaSyDHesbf17OAWz5V8ql59GrIorn8P2kRIQA",
    authDomain: "booksy-c9280.firebaseapp.com",
    databaseURL: "https://booksy-c9280.firebaseio.com",
    projectId: "booksy-c9280",
    storageBucket: "booksy-c9280.appspot.com",
    messagingSenderId: "1029821486215"
  };
  firebase.initializeApp(config);

  export default firebase;