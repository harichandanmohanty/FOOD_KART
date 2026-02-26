import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, id) => {
            state.items = state.items.filter((value) => id.payload !== value.card.info.id);
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;