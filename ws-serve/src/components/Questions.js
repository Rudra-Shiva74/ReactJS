import React from 'react'

export default function Questions(props) {
    return (
        <div className='d-flex justify-content-center'>
            <div className="card" style={{ width: "30rem" }}>
                <div className="card-body">
                    <form onSubmit={props.submit}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">3. What are u currently doing?</label><br />
                            <input type="radio" value={"Teaching"} id="profesion" name='profesion' />Teaching{" "}
                            <input type="radio" value={"Student"} id="profesion" name='profesion' />Student{" "}
                            <input type="radio" value={"Programmer"} id="profesion" name='profesion' />Programmer{" "}
                            <input type="radio" value={"Other"} id="profesion" name='profesion' />Other{" "}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">4. Please rate our cource</label><br />
                            <input type="radio" value={"Poor"} id='rate' name='rate' />Poor{" "}
                            <input type="radio" value={"Good"} id='rate' name='rate' />Good{" "}
                            <input type="radio" value={"Excellent"} id='rate' name='rate' />Excelent{" "}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">5. Write Your review here</label><br />
                            <textarea name="review" id="" cols="50" rows="3"></textarea>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
