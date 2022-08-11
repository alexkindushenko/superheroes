import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { fetchSuperheroes, setCurentPage } from "../../features/superheroes/superheroesSlice";

import SuperheroItem from "../superhero-item";

import "./SuperheroList.css";

const SuperheroList = () => {
  const [searchParams] = useSearchParams();

  const _page = searchParams.get("_page");

  const { superheroes, loading, error } = useSelector((state) => state.superheroes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSuperheroes(_page || 1));
    setCurentPage(parseInt(_page));
  }, [dispatch, _page]);

  if (loading) return <h2 className="display-1 text-center">Loading...</h2>;
  if (error) return <h2 className="display-1 text-center">Server error.</h2>;
  if (!superheroes.length)
    return <h2 className="display-1 text-center">Please add superheroes.</h2>;

  return (
    <div className="superhero-list">
      {superheroes.map((hero) => (
        <SuperheroItem key={hero._id} {...hero} />
      ))}
    </div>
  );
};

export default SuperheroList;
