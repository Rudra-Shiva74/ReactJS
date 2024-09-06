import React from 'react'
import { useSelector } from 'react-redux'
export default function Card() {
    const card = useSelector((state) => state.addtocard);
    return (
        <div>
            <div className="alert alert-primary text-center" role="alert">
                Total Product - {card.count} (Price - {card.price})
            </div>
        </div>
    )
}
