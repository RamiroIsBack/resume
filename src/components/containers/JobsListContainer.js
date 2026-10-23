import React from "react";
import { useCopy } from "../../utils/useCopy";
import { useUI } from "../../context/UIContext";
import "../../css"; // eslint-disable-line no-unused-vars
import Work from "../presentational/Work";
import { ui } from "../../i18n/ui";

function JobsContainer() {
  const { copyLoaded, worksList, talksList, aiProjectsList } = useCopy();
  const { screenSize, workSelected, lang, changeWorkSelected, toggleWorkModal } = useUI();
  const t = ui[lang] || ui.en;

  function handleWorkSelected(selection) {
    if (workSelected !== selection) {
      changeWorkSelected(selection);
    }
    if (
      selection === "MobileAppFullStack" ||
      selection === "XlsxProgram" ||
      screenSize === "mobile"
    ) {
      toggleWorkModal(selection);
    } else {
      const completeList = [...aiProjectsList, ...talksList, ...worksList];
      const workCopy = completeList.find(work => work.nombre === selection);
      window.open(workCopy.url);
    }
  }

  function produceWorkListJsx(list, type) {
    return list.map(element => (
      <Work
        key={element.nombre}
        copy={element}
        selected={workSelected === element.nombre}
        type={type}
        changeWorkSelected={handleWorkSelected}
        mobile={screenSize === "mobile"}
        lang={lang}
      />
    ));
  }

  if (!copyLoaded) {
    return <div />;
  }

  return (
    <div>
      <h3 className="works__subheading">{t.sectionAiProjects}</h3>
      <div className="works__list__container works__list__container--ai">
        {produceWorkListJsx(aiProjectsList, "app")}
      </div>
      <h3 className="works__subheading">{t.sectionOtherWork}</h3>
      <div className="works__list__container">
        {produceWorkListJsx(worksList, "app")}
        {produceWorkListJsx(talksList, "talk")}
      </div>
    </div>
  );
}

export default JobsContainer;
