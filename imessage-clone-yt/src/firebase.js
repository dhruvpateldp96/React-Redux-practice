// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCV9YQuyerWBYpaMhE9-mNnyUwww6TFeLU",
    authDomain: "imessage-clone-yt-b8b7f.firebaseapp.com",
    databaseURL: "https://imessage-clone-yt-b8b7f.firebaseio.com",
    projectId: "imessage-clone-yt-b8b7f",
    storageBucket: "imessage-clone-yt-b8b7f.appspot.com",
    messagingSenderId: "901202807603",
    appId: "1:901202807603:web:1295fec5758b6596d94c46",
    measurementId: "G-XW03RWYV5X"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider }
export default db