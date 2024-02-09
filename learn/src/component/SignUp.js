import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { isLoggedIn } from './Auth';
export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [cpass, setCpass] = useState('');
    const navigate = useNavigate();

    const date = () => {
        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString('default', { month: 'short' })} ${currentDate.getFullYear()}`;
        return formattedDate;
    }

    const RegisterHandler = (e) => {
        e.preventDefault();
        if (cpass !== password) {
            alert("Password Do not Match..!")
        }
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password, name)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(date());
                const db = getDatabase();
                set(ref(db, 'user/' + uuidv4()), {
                    username: name,
                    email: email,
                    userid: user.reloadUserInfo.localId,
                    signup_date: date(),
                    isActive: true
                });
                alert("Register SuccessFull..!");
                navigate('/login')
            })
            .catch((error) => {
                alert(error);
            });

    }
    useEffect(() => {
        if (isLoggedIn()) navigate('/')
    }, [])
    return (
        <div className='text-center d-flex justify-content-center mt-4'>
            <div className="card shadow p-2" style={{ width: "30rem" }}>
                <h2>Registration</h2>
                <div className="card-body">
                    <form onSubmit={RegisterHandler}>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="name" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Email Id" autoComplete='off' />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Id" autoComplete='off' />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="password" name='pass' value={password} onChange={(e) => setPass(e.target.value)} placeholder="Enter Password" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="cpassword" name='cpass' value={cpass} onChange={(e) => setCpass(e.target.value)} placeholder="Enter Confirm Password" />
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
