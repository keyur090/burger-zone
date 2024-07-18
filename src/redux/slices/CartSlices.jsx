import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (cardData) => cardData.title === action.payload.title
      );
      if (existingItem) {
        state.cart = state.cart.map((cardData) =>
          cardData.title === action.payload.title
            ? { ...cardData, qty: cardData.qty + 1 }
            : cardData
        );
      } else {
        state.cart.push(action.payload);
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (cardData) => cardData.title !== action.payload.title
      );
    },
    incrementQty: (state, action) => {
      state.cart = state.cart.map((cardData) =>
        cardData.title === action.payload.title
          ? { ...cardData, qty: cardData.qty + 1 }
          : cardData
      );
    },
    decrementQty: (state, action) => {
      state.cart = state.cart.map((cardData) =>
        cardData.title === action.payload.title
          ? { ...cardData, qty: cardData.qty - 1 }
          : cardData
      );
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  CartSlice.actions;
export default CartSlice.reducer;
