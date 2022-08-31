import { configureStore } from '@reduxjs/toolkit';
import { newSlice } from './slices';
import authSlice from './slices/auth/authSlice';
import searchSlice from './slices/search/searchSlice';


export const store = configureStore({
  reducer: {
    newsCategory: newSlice.reducer,
    searchNews: searchSlice,
    auth: authSlice
  }
})