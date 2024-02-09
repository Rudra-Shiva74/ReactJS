import React from 'react'

export default function Register(props) {
    return (
        <div className='container d-flex justify-content-center'>
            <div className="card" style={{ width: "40rem" }}>
                <button onClick={props.loginGoogle} className='btn btn-primary'>SignUp via Google</button><br />
                <a href="" className='btn btn-primary'>SignUp via facebook</a>
                <br />
                <form onSubmit={props.Register}>
                    <input type="email" placeholder='Enter Your Email' name='email' className='form-control' />
                    <input type="password" className='form-control' name='pass' placeholder='Enter Your Password' />
                    <input type="password" placeholder='Repeat Password' name='rname' className='form-control' />
                    <button className='btn btn-primary' type='submit'>Register</button>
                </form>
            </div>
        </div>
    )
}
