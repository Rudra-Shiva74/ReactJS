import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/counter/CounterSlice'
import counterReducer2 from '../redux/counter/CounterSlice2'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        counter2: counterReducer2
    },
})