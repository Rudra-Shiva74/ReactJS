import React from 'react'
import { initializeApp } from "firebase/app";
import Home from './component/Home'
import SignUp from './component/SignUp'
import PrivateComponent from './component/PrivateComponent';
import Login from './component/Login';
import Navbar from './component/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import AllUser from './component/AllUser';
const firebaseConfig = {
  apiKey: "AIzaSyD1rmVm9g-xeq0_-edkh39QpZJC3krCkHM",
  authDomain: "user-weather.firebaseapp.com",
  databaseURL: "https://user-weather-default-rtdb.firebaseio.com",
  projectId: "user-weather",
  storageBucket: "user-weather.appspot.com",
  messagingSenderId: "608448241196",
  appId: "1:608448241196:web:f825b868fd8636c318fb89"
};
initializeApp(firebaseConfig);
export default function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/users" element={<AllUser />} />
          </Route>
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router >
  )
}
