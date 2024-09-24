import { configureStore } from '@reduxjs/toolkit'
import addtocardSlice from './slicer/addtocardSlice'
export const store = configureStore({
    reducer: {
        addtocard: addtocardSlice,
        removetocard:addtocardSlice
    }
})