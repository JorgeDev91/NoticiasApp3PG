import { createSlice } from '@reduxjs/toolkit'


export const newSlice = createSlice({
  name: 'newsByCategory',
  initialState: {
    page: 0,
    pageLength: 0,
    news: [],
    category: null,
    isLoading: false,
  },
  reducers: {

    startLoadingNews: (state) => {      // coloca el estado de cargando en true
        state.isLoading = true;
    },

    setNews: ( state, action ) => {         // carga los valores provenientes del thunk al estado 
        state.page = action.payload.page;
        state.pageLength = action.payload.pageLength;
        state.news = action.payload.news;
        state.category= action.payload.category;
        state.isLoading = false;
    }

  }
});

export const { startLoadingNews, setNews } = newSlice.actions

