import React from "react";
import "../../css"; // eslint-disable-line no-unused-vars

function SelectedWork({ copy }) {
  return (
    <div>
      <h2>{copy.nombre}</h2>
      <p>{copy.bio}</p>
    </div>
  );
}

export default SelectedWork;
