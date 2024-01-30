import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "kim",
  reducers: {
    setName(state) {
      return state + "종혁";
    }
  }
})

export let { setName } = user.actions;

let cart = createSlice({
  name: "cart",
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ] 
})

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer
  }
})