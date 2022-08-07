import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { _apiBase } from "../../app/constants";

const initialState = {
  superheroes: [],
  loading: true,
  error: false,
};

export const fetchSuperheroes = createAsyncThunk(
  "superheroes/fetchSuperheroes",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.patch(`${_apiBase}superheroes`);

      if (res.statusText !== "OK") {
        throw new Error();
      }

      return res.data.superheroes;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const superherosSlice = createSlice({
  name: "superheros",
  initialState,

  extraReducers: {
    [fetchSuperheroes.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.superheroes = [];
    },
    [fetchSuperheroes.fulfilled]: (state, action) => {
      state.loading = false;
      state.superheroes = action.payload;
    },
    [fetchSuperheroes.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { superheroes, loading, error } = (state) => state.superheroes;

export default superherosSlice.reducer;
