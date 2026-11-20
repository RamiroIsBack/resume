import React from "react";
import { localize } from "../../utils/localize";
import "../../css"; // eslint-disable-line no-unused-vars

// Cauce IA collaborators (content.js → collaboratorsList). App.js only renders this when the list has entries.
function CollaboratorsContainer({ collaborators, lang }) {
  return (
    <div className="collaborators__list">
      {collaborators.map(person => (
        <div className="collaborator" key={person.nombre}>
          {person.urlPic && <img className="collaborator__pic" src={person.urlPic} alt={person.nombre} />}
          <h3 className="collaborator__name">
            {person.url ? <a href={person.url} target="_blank" rel="noopener noreferrer">{person.nombre}</a> : person.nombre}
          </h3>
          <div className="collaborator__role">{localize(person, "role", lang)}</div>
          <p className="collaborator__bio">{localize(person, "bio", lang)}</p>
        </div>
      ))}
    </div>
  );
}

export default CollaboratorsContainer;
