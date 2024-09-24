import React from 'react'
import { useDispatch } from 'react-redux'
import { addtocard, removetocard } from '../redux/slicer/addtocardSlice';
import { useSelector } from 'react-redux';
export default function Product(props) {
    const select = useSelector((state) => state.addtocard)
    const dispatch = useDispatch();
    return (
        <div className="col-lg-3">
            <div className="card">
                <img src={props.image} style={{ height: '200px' }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.productName}</h5>
                    <p className="card-text">₹ {props.price}</p>
                    <button className="btn btn-primary" onClick={() => dispatch(addtocard(props))}>Add To Card</button>
                    <br />
                    {select.id.filter(element => element === props.id).length === 0 ? '' : <><a href='' onClick={(e) => { e.preventDefault(); dispatch(removetocard(props)) }}>{select.id.filter(element => element === props.id).length} Remove From Card</a></>}
                </div>
            </div>
        </div>
    )
}
