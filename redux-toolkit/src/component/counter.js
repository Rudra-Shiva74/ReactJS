import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,multipy,incrementByAmount } from '../redux/counter/CounterSlice'
import { decrement2, increment2,multipy2,incrementByAmount2 } from '../redux/counter/CounterSlice2'

export function Counter() {
    const count2= useSelector((state) => state.counter2.value)
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment2())}
                >
                    Increment
                </button>
                <span>{count}{count2}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(incrementByAmount(12))}
                >
                    multiply 5
                </button>
            </div>
        </div>
    )
}