import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "Counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementBy5: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, reset,incrementBy5 } = counterSlice.actions;

export default counterSlice.reducer;
