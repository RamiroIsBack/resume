import React, { useEffect, useRef, useState } from "react";
import { useCopy } from "../../utils/useCopy";
import { useUI } from "../../context/UIContext";
import { ui } from "../../i18n/ui";
import { cauceUrl } from "../../utils/cauceUrl";
import { AsyncMapaContainer } from "../../utils/AsyncImports";
import "../../css"; // eslint-disable-line no-unused-vars

function FooterContainer() {
  const { footerList } = useCopy();
  const { lang } = useUI();
  const t = ui[lang];

  // Google Maps weighs ~1.5 MB: only mount it when the footer gets within 400px of the viewport.
  const mapRef = useRef(null);
  const [showMap, setShowMap] = useState(false);
  useEffect(() => {
    if (showMap || !mapRef.current) return undefined;
    if (!("IntersectionObserver" in window)) { setShowMap(true); return undefined; }
    const io = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) { setShowMap(true); io.disconnect(); }
    }, { rootMargin: "400px 0px" });
    io.observe(mapRef.current);
    return () => io.disconnect();
  }, [showMap]);

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
      else if (["stackOverFlow", "linkedIn", "gitHub"].includes(item.nombre)) {
        connectList.push(
          <div key={i} onClick={handleClick} id={item.urlLink}>
            <img className="footer__connect__foto" src={item.urlPic} alt="connect" id={item.urlLink} width="50" height="50" loading="lazy" decoding="async" />
          </div>
        );
      }
    });
  }

  return (
    <div className="footer__container">
      <div className="footer__cta__container">
        <a className="footer__cta__button" href={cauceUrl("/")}>
          {t.footerCtaButton}
        </a>
      </div>
      <div className="footer__map__container" ref={mapRef} style={{ minHeight: 260 }}>
        {showMap && (
          <AsyncMapaContainer
            mapInfo={gMapsCopy}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyClcb4B5oRktWDQWGU8Ev4hgYm5p_NXgL4&v=3.exp"
            loadingElement={<div style={{ height: "100%" }} />}
          />
        )}
      </div>
      <div className="footer__tel__container">
        <div className="footer__tel">
          <a href={"tel:" + telCopy.urlLink} style={{ color: "white", fontWeight: "bold" }}>{telCopy.urlLink}</a>
        </div>
        <div className="footer__tel__pic">
          <img className="footer__picPhoto" alt="tel" src={telCopy.urlPic} width="40" height="40" loading="lazy" decoding="async" />
        </div>
      </div>
      <div className="footer__mail__container">
        <div className="footer__mail">
          <a href={"mailto:" + emailCopy.urlLink} style={{ color: "white", fontWeight: "bold" }}>{emailCopy.urlLink}</a>
        </div>
        <div className="footer__mail__pic">
          <img className="footer__picPhoto" src={emailCopy.urlPic} alt="mail" width="40" height="40" loading="lazy" decoding="async" />
        </div>
      </div>
      <div className="footer__connect__foto__container">{connectList}</div>
      <div className="footer__download__foto__container">
        <div className="footer__download__text__link__container">
          <a href={downloadCopy.urlLink} download style={{ color: "inherit", textDecoration: "none" }}>
            <p className="footer__download__text">{t.downloadCV}</p>
          </a>
        </div>
        <div className="footer__download__foto__link__container">
          <a href={downloadCopy.urlLink} download>
            <img className="footer__download__foto" src={downloadCopy.urlPic} alt="download CV" width="40" height="40" loading="lazy" decoding="async" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterContainer;
