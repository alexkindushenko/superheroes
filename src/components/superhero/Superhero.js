import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { fetchSuperhero, deleteSuperhero } from "../../features/superhero/superheroSlice";
import "./Superhero.css";

const Superhero = () => {
  const { superhero, status } = useSelector((state) => state.superhero);
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSuperhero(id));
  }, [dispatch, id]);

  if (status === "loading") return <h2 className="display-1 text-center">Loading...</h2>;
  if (status === "error") return <h2 className="display-1 text-center">Server error.</h2>;
  if (!superhero) return <h2 className="display-1 text-center">Suprhero was deleted.</h2>;

  const { nickname, real_name, origin_description, superpowers, catch_phrase, images } = superhero;

  return (
    <div className="superhero text-center">
      <h2>{nickname}</h2>
      <p>
        <span>Name: </span>
        {real_name}
      </p>
      <p>
        <span>Description: </span>
        {origin_description}
      </p>
      <p>
        <span>Superpowers: </span>
        {superpowers}
      </p>
      <p>
        <span>Catch frase: </span>
        {catch_phrase}
      </p>
      <div className="superhero-img-container">
        {images.map((img, i) => (
          <div className="superhero-img" key={i}>
            <img src={img} alt={nickname} key={i} />
          </div>
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
        <button
          onClick={() => navigate(`/superheroes/${id}/edit`)}
          type="button"
          className="btn btn-warning"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Superhero;
