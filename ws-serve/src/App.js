// import './App.css';
import Login from './User/Login';
import Register from './User/Register';
// import Container from './components/Container';
import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import { useState } from 'react';
const firebaseConfig = {
  apiKey: "AIzaSyAl8j0-epUo0cTQlMVx6WrPBBbMtR3ECfA",
  authDomain: "ws-serve.firebaseapp.com",
  databaseURL: "https://ws-serve-default-rtdb.firebaseio.com",
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

  }
  const LoginHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.pass.value;

  }

  return (
    <>
      {page ? <Login Login={LoginHandler} /> : <Register Register={RegisterHandler} />}
      <button className='btn btn-danger' onClick={toggle}>Switch</button>
    </>
  );
}

export default App;
