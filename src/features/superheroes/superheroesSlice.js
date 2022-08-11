import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { _apiBase } from "../../app/constants";

const initialState = {
  superheroes: [],
  loading: true,
  error: false,
  currentPage: 1,
  pageCount: 0,
};

export const fetchSuperheroes = createAsyncThunk(
  "superheroes/fetchSuperheroes",
  async (page, { rejectWithValue }) => {
    try {
      const res = await axios.patch(`${_apiBase}superheroes?_page=${page}`);

      if (res.statusText !== "OK") {
        throw new Error();
      }

      return res.data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const superheroesSlice = createSlice({
  name: "superheroes",
  initialState,
  reducers: {
    setCurentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [fetchSuperheroes.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.superheroes = [];
    },
    [fetchSuperheroes.fulfilled]: (state, action) => {
      state.loading = false;
      state.superheroes = action.payload.superheroes;
      state.pageCount = action.payload.pageCount;
      state.currentPage = action.payload.currentPage;
    },
    [fetchSuperheroes.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { setCurentPage } = superheroesSlice.actions;

export const {
  superheroes,
  loading,
  error,
  totalCount,
  currentPage,
} = (state) => state.superheroes;

export default superheroesSlice.reducer;
