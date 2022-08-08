import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { _apiBase } from "../../app/constants";

const initialState = {
  superhero: null,
  status: "idle",
  isUpdate: false,
  isAdd: false,
};

export const fetchSuperhero = createAsyncThunk(
  "superhero/fetchSuperhero",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.patch(`${_apiBase}superheroes/${id}`);

      if (res.status !== 200) {
        throw new Error();
      }

      return res.data.superhero;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const deleteSuperhero = createAsyncThunk(
  "superhero/deleteSuperhero",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`${_apiBase}superheroes/${id}`);

      if (res.status !== 204) {
        throw new Error();
      }

      return res.data.superhero;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const updeteSuperhero = createAsyncThunk(
  "superhero/updateSuperhero",
  async (data, { rejectWithValue }) => {
    const { id, ...otherData } = data;
    try {
      const res = await axios.put(`${_apiBase}superheroes/${id}`, { ...otherData });

      if (res.status !== 201) {
        throw new Error();
      }

      return res.data.superhero;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const addSuperhero = createAsyncThunk(
  "superhero/addSuperhero",
  async (data, { rejectWithValue }) => {
    console.log(data);
    try {
      const res = await axios.post(`${_apiBase}superheroes`, { ...data });

      console.log(res);

      if (res.status !== 201) {
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

  reducers: {
    clearSuperhero: (state) => {
      state.superhero = null;
    },
  },

  extraReducers: {
    [fetchSuperhero.pending]: (state) => {
      state.status = "loading";
      state.superhero = null;
    },
    [fetchSuperhero.fulfilled]: (state, action) => {
      state.status = "idle";
      state.superhero = action.payload;
      state.isUpdate = false;
      state.isAdd = false;
    },
    [fetchSuperhero.rejected]: (state) => {
      state.status = "error";
    },
    [deleteSuperhero.pending]: (state) => {
      state.status = "loading";
    },
    [deleteSuperhero.fulfilled]: (state) => {
      state.status = "idle";
      state.superhero = null;
    },
    [deleteSuperhero.rejected]: (state) => {
      state.status = "error";
    },
    [updeteSuperhero.pending]: (state) => {
      state.status = "loading";
    },
    [updeteSuperhero.fulfilled]: (state, action) => {
      state.status = "idle";
      state.superhero = action.payload;
      state.isUpdate = true;
    },
    [updeteSuperhero.rejected]: (state) => {
      state.status = "error";
    },
    [addSuperhero.pending]: (state) => {
      state.status = "loading";
      state.superhero = null;
    },
    [addSuperhero.fulfilled]: (state, action) => {
      state.status = "idle";
      state.superhero = action.payload;
      state.isAdd = true;
    },
    [addSuperhero.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export const { clearSuperhero } = superheroSlice.actions;

export const { superhero, loading, error } = (state) => state.superhero;

export default superheroSlice.reducer;
