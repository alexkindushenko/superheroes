import React from "react";

import EditSuperhero from "../components/edit-superhero";
import { updeteSuperhero } from "../features/superhero/superheroSlice";

const EditSuperheroPage = () => {
  return <EditSuperhero sendSuperhero={updeteSuperhero} />;
};

export default EditSuperheroPage;
