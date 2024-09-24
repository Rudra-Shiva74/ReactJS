import React from 'react'
import { useSelector } from 'react-redux'

export default function Card() {
    const card = useSelector((state) => state.addtocard);

    return (
        <div>
            <div className="alert alert-primary text-center position-fixed w-100" style={{ top: 0, zIndex: 9999 }}>
                Total Product - {card.count} (Price - ₹ {card.price})
            </div>
            <div style={{ paddingTop: '60px' }}>
                {/* Other content of the page goes here */}
            </div>
        </div>
    )
}
