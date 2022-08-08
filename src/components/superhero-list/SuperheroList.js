import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchSuperheroes } from "../../features/superheroes/superheroesSlice";

import SuperheroItem from "../superhero-item";

import "./SuperheroList.css";

const SuperheroList = () => {
  const { superheroes, loading, error, currentPage } = useSelector((state) => state.superheroes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSuperheroes((currentPage - 1) * 5));
  }, [dispatch, currentPage]);

  if (loading) return <h2 className="display-1 text-center">Loading...</h2>;
  if (error) return <h2 className="display-1 text-center">Server error.</h2>;

  return (
    <div className="superhero-list">
      {superheroes.map((hero) => (
        <SuperheroItem key={hero._id} {...hero} />
      ))}
    </div>
  );
};

export default SuperheroList;
