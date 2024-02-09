import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import { isLoggedIn } from './Auth';
import { useNavigate } from 'react-router-dom';

export default function AllUser() {
    const [data, setData] = useState([]);
    const [name, setName] = useState('')
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn()) {
            navigate('/');
        }
        const db = getDatabase();
        const starCountRef = ref(db, 'user/');
        onValue(starCountRef, (snapshot) => {
            let record = [];
            snapshot.forEach(childsnap => {
                let keyName = childsnap.key;
                let data = childsnap.val();
                record.push({ "key": keyName, "data": data });
            })
            setData(record);
        });
    }, [])
    
    return (
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)} name="" id="" placeholder='Search' />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">Name</th>
                        <th scope="col">Signin-Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((Element, index) => {
                        return (
                            <tr key={Element.key}>
                                {Element.data.username.toLowerCase().indexOf(name.toLowerCase()) >= 0 || Element.data.email.toLowerCase().indexOf(name.toLowerCase()) >= 0 ? <>
                                    <th scope="row">{++index}</th>
                                    <td>{Element.data.email}</td>
                                    <td>{Element.data.username}</td>
                                    <td>{Element.data.signup_date}</td>
                                    <td><i className='fa-solid fa-trash' style={{ cursor: "pointer" }}></i>{ } <i className="fa-solid fa-pen-to-square" style={{ cursor: "pointer" }}></i></td></> : ''}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
