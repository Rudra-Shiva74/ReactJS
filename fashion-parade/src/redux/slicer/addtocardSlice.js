import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    id: [],
    price: 0,
    count: 0
}
export const addtocardSlice = createSlice({
    name: "addtocard",
    initialState,
    reducers: {
        addtocard: (state, action) => {
            state.id.push(action.payload.id);
            state.price += action.payload.price;
            state.count += 1;
        }
    }
})
export const { addtocard } = addtocardSlice.actions
export default addtocardSlice.reducer