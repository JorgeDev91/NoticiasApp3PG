import { createSlice } from '@reduxjs/toolkit'


const searchSlice = createSlice({
  name: 'search',
  initialState: {
    pagelength: 0,
    page: 1,
    query: null,
    news: [],
    
  },
  reducers: {

    getQuery: ( state, action ) => {

        state.page = action.payload.page;
        state.pagelength = action.payload.pageLength;
        state.news = action.payload.news;
        state.query = action.payload.category;
        
    }
  }
});

export const { getQuery } = searchSlice.actions

export default searchSlice.reducer