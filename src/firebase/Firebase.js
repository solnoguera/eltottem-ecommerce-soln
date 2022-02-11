import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
    
    {
        apiKey: "AIzaSyAaaRK9taw26QHj2OdI0hDHaOhBE08ZUik",
        authDomain: "el-tottem-ecommerce.firebaseapp.com",
        projectId: "el-tottem-ecommerce",
        storageBucket: "el-tottem-ecommerce.appspot.com",
        messagingSenderId: "214668127947",
        appId: "1:214668127947:web:c14d2e1a44e77f687d354e",
        measurementId: "G-C6R1FNSSST"
      }
);

export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}
