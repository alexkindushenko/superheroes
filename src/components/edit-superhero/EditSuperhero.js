import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import "./EditSuperhero.css";

const EditSuperhero = ({ sendSuperhero }) => {
  const { superhero, superheroId, status, isUpdate, isAdd } = useSelector(
    (state) => state.superhero
  );
  const dispatch = useDispatch();
  let location = useLocation();

  const [nickname, setNickname] = useState(superhero?.nickname || "");
  const [real_name, setReal_name] = useState(superhero?.real_name || "");
  const [superpowers, setSuperpowers] = useState(superhero?.superpowers || "");
  const [catch_phrase, setCatch_phrase] = useState(superhero?.catch_phrase || "");
  const [origin_description, setOrigin_description] = useState(superhero?.origin_description || "");
  const [image_1, setImage_1] = useState(superhero?.images[0] || "");
  const [image_2, setImage_2] = useState(superhero?.images[1] || "");
  const [image_3, setImage_3] = useState(superhero?.images[2] || "");
  const [image_4, setImage_4] = useState(superhero?.images[3] || "");
  const [image_5, setImage_5] = useState(superhero?.images[4] || "");

  const images = [image_1, image_2, image_3, image_4, image_5];

  const btnDisabled =
    !nickname.trim() ||
    !real_name.trim() ||
    !superpowers.trim() ||
    !catch_phrase.trim() ||
    !origin_description.trim();

  const handleSendSuperhero = () => {
    dispatch(
      sendSuperhero({
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        images: images.filter((el) => el.length),
        id: superhero ? superhero._id : "",
      })
    );
  };

  if (status === "loading") return <h2 className="display-1 text-center">Loading...</h2>;
  if (status === "error") return <h2 className="display-1 text-center">Server error.</h2>;
  if (isUpdate) return <Navigate to={`/superheroes/${superhero._id}`} />;
  if (isAdd) return <Navigate to={`/superheroes/${superheroId}`} />;

  return (
    <div className="edit-superhero">
      <h2>
        {location.pathname === "/superheroes/add_superhero" ? "Add superhero" : "Update superhero"}
      </h2>
      <div>
        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Nickname"
            onChange={(e) => setNickname(e.target.value)}
            value={nickname}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Real name"
            value={real_name}
            onChange={(e) => setReal_name(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Superpowers"
            value={superpowers}
            onChange={(e) => setSuperpowers(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Catch Phrase"
            value={catch_phrase}
            onChange={(e) => setCatch_phrase(e.target.value)}
          />
        </div>

        <div className="imgurl-container">
          <p>Fields Image url is not required</p>
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Image url"
              value={image_1}
              onChange={(e) => setImage_1(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Image url"
              value={image_2}
              onChange={(e) => setImage_2(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Image url"
              value={image_3}
              onChange={(e) => setImage_3(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Image url"
              value={image_4}
              onChange={(e) => setImage_4(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Image url"
              value={image_5}
              onChange={(e) => setImage_5(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Description"
            value={origin_description}
            onChange={(e) => setOrigin_description(e.target.value)}
          ></textarea>
        </div>
        <button
          disabled={btnDisabled}
          type="button"
          onClick={() => handleSendSuperhero()}
          className="btn btn-primary"
        >
          Send Superhero
        </button>
      </div>
    </div>
  );
};

export default EditSuperhero;
