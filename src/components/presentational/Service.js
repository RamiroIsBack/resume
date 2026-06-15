import React from "react";
import LazyLoad from "react-lazy-load";
import { localize } from "../../utils/localize";

function Service({ serviceInfo, sectionSelected, openModal, lang }) {
  function handleClick() {
    if (serviceInfo.urlLink) {
      window.open(serviceInfo.urlLink, "_blank");
    }
    if (serviceInfo.urlPic2) {
      openModal(serviceInfo);
    }
  }

  let logo = "";
  let cursor = {};
  let stylingBarWidth = { width: "80%" };
  if (serviceInfo) {
    logo = serviceInfo.urlPic;
    const percentage = parseInt(serviceInfo.percentage, 10);
    stylingBarWidth = sectionSelected
      ? { width: `${percentage}%`, animationName: "progress", animationDuration: "3s", animationTimingFunction: "ease-in-out" }
      : { width: `${percentage}%` };
    if (serviceInfo.urlLink || serviceInfo.urlPic2) {
      cursor = { cursor: "pointer" };
    }
  }

  const nombre = localize(serviceInfo, "nombreToShow", lang) || localize(serviceInfo, "nombre", lang);
  const bio    = localize(serviceInfo, "bio", lang);

  if (serviceInfo.type === "stack") {
    return (
      <div className="stack__card">
        <h2 className="service__name">{nombre}</h2>
        <div className="bio__container__services">{bio}</div>
        <div className="stack__grid">
          {serviceInfo.tools.map((tool, i) => (
            <div className="tool__card" key={i}>
              <span className="tool__icon">{tool.icon}</span>
              <div className="tool__name">{tool.name}</div>
              <span className="tool__cat">{lang === "es" ? (tool.category_es || tool.category) : tool.category}</span>
              <p className="tool__desc">{lang === "es" ? tool.desc_es : tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="name__pic__container">
        <h2 className="service__name">{nombre}</h2>
        <LazyLoad height={60} offsetVertical={100}>
          <img className="logo_pic" style={cursor} alt="" src={logo} onClick={handleClick} />
        </LazyLoad>
      </div>
      <div className="progress__bar__container">
        <div className="progress__bar" style={stylingBarWidth} />
      </div>
      <h5 className="percentage__num">{serviceInfo.percentage}%</h5>
      <div className="bio__container__services">
        {bio.split("\n").map((item, key) => (
          <span key={key}>{item}<br /></span>
        ))}
      </div>
    </div>
  );
}

export default Service;
