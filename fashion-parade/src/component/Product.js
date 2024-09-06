import React from 'react'
import { useDispatch } from 'react-redux'
import { addtocard } from '../redux/slicer/addtocardSlice';
export default function Product(props) {
    const dispatch = useDispatch();
    return (
        <div className="col-lg-3">
            <div className="card">
                <img src={props.image} style={{ height: '200px' }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.productName}</h5>
                    <p className="card-text">$ {props.price}</p>
                    <button className="btn btn-primary" onClick={() => dispatch(addtocard(props))}>Add To Card</button>
                </div>
            </div>
        </div>
    )
}
