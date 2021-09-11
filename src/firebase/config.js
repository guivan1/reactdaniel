import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
apiKey: "AIzaSyCdYhnpcx21B5jbnLqNRSNL9bCHn1sfhK4",
  authDomain: "react-daniel-1b07a.firebaseapp.com",
  projectId: "react-daniel-1b07a",
  storageBucket: "react-daniel-1b07a.appspot.com",
  messagingSenderId: "254426790772",
  appId: "1:254426790772:web:0dbe8f4e862a71681bca21"
};
const app = firebase.initializeApp(firebaseConfig);


export const getFirebase = () => {
    return app
}
        
export const getFirestore = () => {
    return firebase.firestore(app)
}