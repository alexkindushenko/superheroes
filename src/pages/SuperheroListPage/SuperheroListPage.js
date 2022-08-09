import React from "react";
import { useSelector } from "react-redux";

import SuperheroList from "../../components/superhero-list";
import Pagination from "../../components/pagination";

const SuperheroListPege = () => {
  const { superheroes } = useSelector((state) => state.superheroes);

  return (
    <>
      <SuperheroList />
      {superheroes.length ? <Pagination /> : null}
    </>
  );
};

export default SuperheroListPege;
