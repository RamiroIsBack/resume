import React from "react";
import { useCopy } from "../../utils/useCopy";
import { useUI } from "../../context/UIContext";
import "../../css"; // eslint-disable-line no-unused-vars
import Work from "../presentational/Work";

function JobsContainer() {
  const { copyLoaded, worksList, talksList } = useCopy();
  const { screenSize, workSelected, changeWorkSelected, toggleWorkModal } = useUI();

  function handleWorkSelected(selection) {
    if (workSelected !== selection) {
      changeWorkSelected(selection);
    }
    if (
      selection === "MobileAppFullStack" ||
      selection === "ABlokar" ||
      selection === "XlsxProgram" ||
      screenSize === "mobile"
    ) {
      toggleWorkModal(selection);
    } else {
      const completeList = [...talksList, ...worksList];
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
      />
    ));
  }

  if (!copyLoaded) {
    return <div />;
  }

  return (
    <div>
      <div className="works__list__container">
        {produceWorkListJsx(worksList, "app")}
        {produceWorkListJsx(talksList, "talk")}
      </div>
    </div>
  );
}

export default JobsContainer;
