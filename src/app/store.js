import { configureStore } from "@reduxjs/toolkit";

import superheroesSlice from "../features/superheroes/superheroesSlice";

export const store = configureStore({
  reducer: {
    superheroes: superheroesSlice,
  },
});
