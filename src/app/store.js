import { configureStore } from "@reduxjs/toolkit";

import superheroesSlice from "../features/superheroes/superheroesSlice";
import superheroSlice from "../features/superhero/superheroSlice";

export const store = configureStore({
  reducer: {
    superheroes: superheroesSlice,
    superhero: superheroSlice,
  },
});
