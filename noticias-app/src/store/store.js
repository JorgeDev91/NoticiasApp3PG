import { configureStore } from '@reduxjs/toolkit';
import { newSlice } from './slices';
import searchSlice from './slices/search/searchSlice';


export const store = configureStore({
  reducer: {
    newsCategory: newSlice.reducer,
    searchNews: searchSlice
  }
})