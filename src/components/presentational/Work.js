import React from "react";
import "../../css"; // eslint-disable-line no-unused-vars

function Work({ type, copy, selected, changeWorkSelected, mobile }) {
  let typeAndState = type;
  let selectedStyle = {};
  if (type === "app") {
    typeAndState = copy.state;
  }
  if (selected) {
    selectedStyle = { borderBottom: "2px solid rgb(81, 192, 242)" };
  }
  return (
    <div
      className="work__container"
      onClick={() => changeWorkSelected(copy.nombre)}
    >
      <div className="work__title__container" style={selectedStyle}>
        <h2 style={{ marginBottom: 0, marginTop: 8 }}>{copy.nombreToShow}</h2>
      </div>
      <div className="work__title__container">
        <h3 style={{ opacity: "0.5", fontWeight: 100, margin: 0, marginBottom: 8 }}>
          {typeAndState}
        </h3>
      </div>
      <div className="work__pic__container">
        <img className="work__pic" alt={copy.nombre} src={copy.urlPic} />
      </div>
      {!mobile && (
        <div className="work__bio__container">
          <p style={{ marginBottom: 0, marginTop: 8 }}>{copy.bio}</p>
        </div>
      )}
    </div>
  );
}

export default Work;
