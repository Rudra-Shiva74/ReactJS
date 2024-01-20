import React from 'react'

export default function Login(props) {
    return (
        <div className='container d-flex justify-content-center'>
            <div class="card" style={{ width: "40rem" }}>
                <a href="" className='btn btn-primary'>SignUp via Google</a><br />
                <a href="" className='btn btn-primary'>SignUp via facebook</a><br />
                <form onSubmit={props.Login}>
                    <input type="email" placeholder='Enter Your Email' className='form-control' />
                    <input type="password" placeholder='Enter Your Password' className='form-control' />
                    <button type='submit' className='btn btn-primary'>Login</button>
                </form>
            </div>
        </div>
    )
}
