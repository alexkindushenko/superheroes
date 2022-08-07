import React from "react";

import "./EditSuperhero.css";

const EditSuperhero = () => {
  return (
    <div className="add-superhero">
      <form>
        <div className="mb-3">
          <input className="form-control" placeholder="Nickname" />
        </div>

        <div className="mb-3">
          <input className="form-control" placeholder="Real name" />
        </div>

        <div className="mb-3">
          <input className="form-control" placeholder="Superpowers" />
        </div>

        <div className="mb-3">
          <input className="form-control" placeholder="Catch Phrase" />
        </div>

        <div className="mb-3">
          <input className="form-control" placeholder="Image url" />
        </div>

        <div className="mb-3">
          <textarea className="form-control" placeholder="Description"></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Add Superhero
        </button>
      </form>
    </div>
  );
};

export default EditSuperhero;
