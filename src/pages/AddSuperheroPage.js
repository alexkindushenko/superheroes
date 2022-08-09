import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import EditSuperhero from "../components/edit-superhero";
import { addSuperhero, clearSuperhero } from "../features/superhero/superheroSlice";

const AddSuperheroPage = () => {
  const { superhero } = useSelector((state) => state.superhero);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearSuperhero());
  }, [dispatch, superhero]);

  if (superhero) return <h2>...</h2>;
  return <EditSuperhero sendSuperhero={addSuperhero} />;
};

export default AddSuperheroPage;
