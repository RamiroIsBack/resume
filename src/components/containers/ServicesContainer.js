import React from "react";
import { useCopy } from "../../utils/useCopy";
import { useUI } from "../../context/UIContext";
import { Service } from "../presentational";
import "../../css"; // eslint-disable-line no-unused-vars

function ServicesContainer() {
  const { servicesList } = useCopy();
  const { scrollIndicator, lang, toggleWorkModal } = useUI();

  const animeIt = scrollIndicator === "services";
  const servicesList_ = servicesList.length !== 0
    ? servicesList.map((item, i) => (
        <div key={i} className={item.type === "stack" ? "stack__wrapper" : ""}>
          <Service sectionSelected={animeIt} serviceInfo={item} openModal={toggleWorkModal} lang={lang} />
        </div>
      ))
    : [];

  return <div className="services__container">{servicesList_}</div>;
}

export default ServicesContainer;
