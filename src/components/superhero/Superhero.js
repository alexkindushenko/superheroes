import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchSuperhero, deleteSuperhero } from "../../features/superhero/superheroSlice";
import "./Superhero.css";

const Superhero = () => {
  const { superhero, loading, error } = useSelector((state) => state.superhero);
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSuperhero(id));
  }, [dispatch, id]);

  if (loading) return <h2 className="display-1 text-center">Loading...</h2>;
  if (error) return <h2 className="display-1 text-center">Server error.</h2>;
  if (!superhero) return <h2 className="display-1 text-center">Suprhero was deleted.</h2>;

  const { nickname, real_name, origin_description, superpowers, catch_phrase, images } = superhero;

  return (
    <div className="superhero text-center">
      <h2>{nickname}</h2>
      <p>{real_name}</p>
      <p>{origin_description}</p>
      <p>{superpowers}</p>
      <p>{catch_phrase}</p>
      <div className="superhero-img-container d-flex">
        {images.map((img, i) => (
          <img src={img} alt={nickname} key={i} />
        ))}
      </div>
      <div>
        <button
          onClick={() => dispatch(deleteSuperhero(id))}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </button>
        <button type="button" className="btn btn-warning">
          Edit
        </button>
      </div>
    </div>
  );
};

export default Superhero;
