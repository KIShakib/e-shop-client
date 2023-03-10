import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            return state = [...state, action.payload]
        },
        removeFromCart: (state, action) => {
            return state = state.filter(st => st._id !== action.payload)
        }
    }

})

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;