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
        },
        removetocard: (state, action) => {
            const index = state.id.indexOf(action.payload.id);
            if (index !== -1) {
                state.id.splice(index, 1);
                state.price -= action.payload.price;
                state.count -= 1;
            }
        }
    }
})
export const { addtocard, removetocard } = addtocardSlice.actions;
export default addtocardSlice.reducer;