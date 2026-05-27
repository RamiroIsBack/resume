import React from "react";
import actions from "../../actions";
import { connect } from "react-redux";
import "../../css"; // eslint-disable-line no-unused-vars
import Work from "../presentational/Work";

function JobsContainer({ copy, section, changeWorkSelected, toggleWorkModal }) {
  function handleWorkSelected(selection) {
    if (section.workSelected !== selection) {
      changeWorkSelected(selection);
    }
    if (
      selection === "MobileAppFullStack" ||
      selection === "ABlokar" ||
      selection === "XlsxProgram" ||
      section.screenSize === "mobile"
    ) {
      toggleWorkModal(selection);
    } else {
      const completeList = [...copy.talksList, ...copy.worksList];
      const workCopy = completeList.find(work => work.nombre === selection);
      window.open(workCopy.url);
    }
  }

  function produceWorkListJsx(list, type) {
    return list.map(element => (
      <Work
        key={element.nombre}
        copy={element}
        selected={section.workSelected === element.nombre}
        type={type}
        changeWorkSelected={handleWorkSelected}
        mobile={section.screenSize === "mobile"}
      />
    ));
  }

  if (!copy || !copy.copyLoaded) {
    return <div />;
  }

  return (
    <div>
      <div className="works__list__container">
        {produceWorkListJsx(copy.worksList, "app")}
        {produceWorkListJsx(copy.talksList, "talk")}
      </div>
    </div>
  );
}

const stateToProps = state => ({ copy: state.copy, section: state.section });
const dispatchToProps = dispatch => ({
  changeWorkSelected: selection => dispatch(actions.changeWorkSelected(selection)),
  toggleWorkModal: selection => dispatch(actions.toggleWorkModal(selection))
});

export default connect(stateToProps, dispatchToProps)(JobsContainer);
