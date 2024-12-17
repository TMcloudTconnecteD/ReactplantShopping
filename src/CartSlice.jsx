import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const existingItem = state.items.find(item => item.name === action.payload.name);
        if (existingItem) {
          // If item already exists, increase the quantity
          existingItem.quantity += 1;
        } else {
          // If item doesn't exist, add a new item
          state.items.push({
            ...action.payload,
            quantity: 1 // Initialize quantity for the new item
          });
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
          existingItem.quantity = quantity;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
