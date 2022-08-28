import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    // add your non-async reducers here
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    }
  },
  extraReducers: {
    // extraReducers handles asynchronous requests, which is our main focus.
  }
})
// Action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;    