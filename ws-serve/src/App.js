// import './App.css';
import Login from './User/Login';
import Register from './User/Register';
// import Container from './components/Container';
import { getDatabase, ref, set } from "firebase/database";
import { initializeApp, getAuth, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useState } from 'react';
const firebaseConfig = {
  apiKey: "AIzaSyAl8j0-epUo0cTQlMVx6WrPBBbMtR3ECfA",
  authDomain: "ws-serve.firebaseapp.com",
  databaseURL: "https://weather-user-default-rtdb.firebaseio.com",
  projectId: "ws-serve",
  storageBucket: "ws-serve.appspot.com",
  messagingSenderId: "663934676299",
  appId: "1:663934676299:web:feab76c2de131092950cce"
};
initializeApp(firebaseConfig);
function App() {
  const [page, setPage] = useState(false);
  const toggle = () => {
    if (page)
      setPage(false);
    else setPage(true);
  }
  const RegisterHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    const rname = e.target.rname.value;
    if (rname !== pass) {
      alert("Password Do not Match..!")
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        alert(user);
      })
      .catch((error) => {
        alert(error);
      });

  }
  const LoginHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const loginGoogle = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <>
      {page ? <Login Login={LoginHandler} /> : <Register loginGoogle={loginGoogle} Register={RegisterHandler} />}
      <button className='btn btn-danger' onClick={toggle}>Switch</button>
    </>
  );
}

export default App;
