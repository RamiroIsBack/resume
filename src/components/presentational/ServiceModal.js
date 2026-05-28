import React from "react";
import style from "./styles";
import { localize } from "../../utils/localize";

function ServiceModal({ show, mobile, workToShow, onClose, lang }) {
  if (!show) return null;
  const mobileStyle = mobile ? { right: "300px" } : null;
  const nombre = localize(workToShow, "nombre", lang);
  return (
    <div style={style.modal.backdropStyle}>
      <div style={{ ...style.modal.stiloModal, ...mobileStyle }}>
        <div>
          <div style={style.modal.formContainer}>
            <div onClick={onClose} style={style.modal.btnClose}>X</div>
            <div style={{ width: "60%" }}>
              <h3>{nombre}</h3>
            </div>
            {workToShow.urlPic1 && (
              <div style={{ width: "100%" }}>
                <img style={{ maxWidth: "90%" }} alt={nombre} src={workToShow.urlPic1} />
              </div>
            )}
            {workToShow.urlPic2 && (
              <div style={{ width: "100%" }}>
                <img style={{ maxWidth: "90%" }} alt={nombre} src={workToShow.urlPic2} />
              </div>
            )}
            {workToShow.urlPic3 && (
              <div style={{ width: "100%" }}>
                <img style={{ maxWidth: "90%" }} alt={nombre} src={workToShow.urlPic3} />
              </div>
            )}
            {workToShow.urlPic && (
              <div style={{ width: "100%" }}>
                <img style={{ maxWidth: "90%" }} alt={nombre} src={workToShow.urlPic} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceModal;
