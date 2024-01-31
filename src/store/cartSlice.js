import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers: {
    increaseCount(state, action) {
      let target = state.find((item) => { return item.id === action.payload });
      target.count += 1;
    },
    addToCart(state, action) {
      if (!(state.find((item) => { return item.id === action.payload.id }))) {
        let newState = [...state];
        newState.push(action.payload);
        return newState;
      }
    }
  }
});

export let { increaseCount, addToCart } = cart.actions;
export default cart;