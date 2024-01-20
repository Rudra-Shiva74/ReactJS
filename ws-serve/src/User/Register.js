import React from 'react'

export default function Register(props) {
    return (
        <div className='container d-flex justify-content-center'>
            <div class="card" style={{ width: "40rem" }}>
                <a href="" className='btn btn-primary'>SignUp via Google</a><br />
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
