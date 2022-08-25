import { configureStore } from '@reduxjs/toolkit';
import { newSlice } from './slices';


export const store = configureStore({
  reducer: {
    newsCategory: newSlice.reducer
  }
})