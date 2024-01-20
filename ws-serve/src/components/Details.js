import React from 'react'

export default function Details(props) {
    return (
        <div className='d-flex justify-content-center'>
            <div className="card" style={{ width: "30rem" }}>
                <div className="card-body">
                    <form onSubmit={props.submit}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">1. Enter Your Name</label>
                            <input type="text" className="form-control" name='name' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">2. Enter Your Email</label>
                            <input type="email" className="form-control" name='email' />
                        </div>
                        <button type='submit' className='btn btn-primary'>Next</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
