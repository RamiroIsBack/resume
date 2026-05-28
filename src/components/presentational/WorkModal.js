import React from "react";
import style from "./styles";
import YouTube from "react-youtube";
import { ui } from "../../i18n/ui";
import { localize } from "../../utils/localize";

function WorkModal({ show, mobile, workToShow, onClose, lang }) {
  if (!show) return null;
  const t = ui[lang] || ui.en;

  function handleVideo() {
    if (!workToShow.urlVideo) return null;
    if (mobile) return workToShow.urlVideo;
    const opts = { height: "390", width: "640", playerVars: { autoplay: 0 } };
    const idForVideo = workToShow.urlVideo.substring(
      workToShow.urlVideo.indexOf("=") + 1
    );
    return <YouTube videoId={idForVideo} opts={opts} />;
  }

  const nombre = localize(workToShow, "nombre", lang);
  const bio    = localize(workToShow, "bio", lang);

  const mobileStyle = mobile ? { right: "300px" } : null;
  return (
    <div style={style.modal.backdropStyle}>
      <div style={{ ...style.modal.stiloModal, ...mobileStyle }}>
        <div>
          <div style={style.modal.formContainer}>
            <div onClick={onClose} style={style.modal.btnClose}>X</div>
            <div style={{ width: "60%" }}>
              <h3>{nombre}</h3>
            </div>
            <div style={{ width: "90%" }}>
              <h4 style={{ fontWeight: "normal" }}>{bio}</h4>
            </div>
            <div style={{ width: "60%" }}>
              <h5 style={{ fontWeight: "lighter" }}>{workToShow.date}</h5>
            </div>
            {workToShow.urlPic2 && (
              <div style={{ width: "100%" }}>
                <img style={{ maxWidth: "90%" }} alt={nombre} src={workToShow.urlPic2} />
              </div>
            )}
            {workToShow.url ? <p>{t.visitSite}</p> : workToShow.urlVideo ? <p>{t.watchVideo}</p> : null}
            <div style={{ width: "60%", cursor: "pointer" }}>
              <a onClick={() => window.open(workToShow.url || workToShow.urlVideo)}>
                <h4 style={{ color: "blue", margin: "0,0,10,0", fontWeight: "normal" }}>
                  {workToShow.url ? workToShow.url : handleVideo()}
                </h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkModal;
