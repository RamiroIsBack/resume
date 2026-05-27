import React from "react";
import { useCopy } from "../../utils/useCopy";
import MapaContainer from "./MapaContainer";
import "../../css"; // eslint-disable-line no-unused-vars

function FooterContainer() {
  const { footerList } = useCopy();

  function handleClick(event) {
    window.open(event.target.id, "_blank");
  }

  let gMapsCopy = {};
  let emailCopy = {};
  let telCopy = {};
  let downloadCopy = {};
  const connectList = [];

  if (footerList.length !== 0) {
    footerList.forEach((item, i) => {
      if (item.nombre === "download")    downloadCopy = item;
      if (item.nombre === "gMaps")       gMapsCopy = item;
      if (item.nombre === "email")       emailCopy = item;
      if (item.nombre === "tel")         telCopy = item;
      else if (["instagram", "stackOverFlow", "linkedIn", "gitHub"].includes(item.nombre)) {
        connectList.push(
          <div key={i} onClick={handleClick} id={item.urlLink}>
            <img className="footer__connect__foto" src={item.urlPic} alt="connect" id={item.urlLink} />
          </div>
        );
      }
    });
  }

  return (
    <div className="footer__container">
      <div className="footer__map__container">
        <MapaContainer
          mapInfo={gMapsCopy}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyClcb4B5oRktWDQWGU8Ev4hgYm5p_NXgL4&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: "100%" }} />}
        />
      </div>
      <div className="footer__tel__container">
        <div className="footer__tel">
          <a href={"tel:" + telCopy.urlLink} style={{ color: "white", fontWeight: "bold" }}>{telCopy.urlLink}</a>
        </div>
        <div className="footer__tel__pic">
          <img className="footer__picPhoto" alt="tel" src={telCopy.urlPic} />
        </div>
      </div>
      <div className="footer__mail__container">
        <div className="footer__mail">
          <a href={"mailto:" + emailCopy.urlLink} style={{ color: "white", fontWeight: "bold" }}>{emailCopy.urlLink}</a>
        </div>
        <div className="footer__mail__pic">
          <img className="footer__picPhoto" src={emailCopy.urlPic} alt="mail" />
        </div>
      </div>
      <div className="footer__connect__foto__container">{connectList}</div>
      <div className="footer__download__foto__container">
        <a className="footer__download__text__link__container" href={downloadCopy.urlLink} download="Ramiro Santamaria Resume.pdf">
          <h4 className="footer__download__text">Download .pdf</h4>
        </a>
        <a className="footer__download__foto__link__container" href={downloadCopy.urlLink} download="Ramiro Santamaria Resume.pdf">
          <img className="footer__download__foto" src={downloadCopy.urlPic} alt="download" />
        </a>
      </div>
    </div>
  );
}

export default FooterContainer;
