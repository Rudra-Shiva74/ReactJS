import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { isLoggedIn } from './Auth';
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        if (isLoggedIn()) {
            navigate('/');
        }
    }, [])
    const LoginHandler = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                localStorage.setItem('user', JSON.stringify(user));
                alert("Login")
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div>
            <div className='text-center d-flex justify-content-center mt-4'>
                <div className="card shadow p-2" style={{ width: "30rem" }}>
                    <h2>Login</h2>
                    <div className="card-body">
                        <form onSubmit={LoginHandler}>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Id" autoComplete='off' />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="password" name='pass' value={password} onChange={(e) => setPass(e.target.value)} placeholder="Enter Password" />
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
