import React from "react";
import { ui } from "../../i18n/ui";
import { localize } from "../../utils/localize";
import "../../css"; // eslint-disable-line no-unused-vars

function Work({ type, copy, selected, changeWorkSelected, mobile, lang }) {
  const t = ui[lang] || ui.en;
  let typeAndState = type === "talk" ? t.workTypeTalk : localize(copy, "state", lang);
  const selectedStyle = selected ? { borderBottom: "2px solid rgb(81, 192, 242)" } : {};
  const nombreToShow  = localize(copy, "nombreToShow", lang) || copy.nombreToShow;
  const bio           = localize(copy, "bio", lang);

  return (
    <div
      className="work__container"
      onClick={() => changeWorkSelected(copy.nombre)}
    >
      <div className="work__title__container" style={selectedStyle}>
        <h2 style={{ marginBottom: 0, marginTop: 8 }}>{nombreToShow}</h2>
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
          <p style={{ marginBottom: 0, marginTop: 8 }}>{bio}</p>
        </div>
      )}
    </div>
  );
}

export default Work;
