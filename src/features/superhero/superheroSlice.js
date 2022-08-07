import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { _apiBase } from "../../app/constants";

const initialState = {
  superhero: {},
  loading: true,
  error: false,
};

export const fetchSuperhero = createAsyncThunk(
  "superhero/fetchSuperhero",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.patch(`${_apiBase}superheroes/${id}`);

      if (res.statusText !== "OK") {
        throw new Error();
      }

      return res.data.superhero;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const superheroSlice = createSlice({
  name: "superhero",
  initialState,

  extraReducers: {
    [fetchSuperhero.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.superhero = {};
    },
    [fetchSuperhero.fulfilled]: (state, action) => {
      state.loading = false;
      state.superhero = action.payload;
    },
    [fetchSuperhero.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { superhero, loading, error } = (state) => state.superhero;

export default superheroSlice.reducer;
