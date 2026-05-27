import React from "react";
import { ServiceModal, WorkModal } from "../presentational";
import { connect } from "react-redux";
import actions from "../../actions";

function ModalContainer({ copy, section, toggleWorkModal }) {
  const modalShowing = section.workModal !== "" || section.serviceModal !== "";
  if (!modalShowing) return null;

  const mobile = section.screenSize === "mobile";

  if (section.workModal !== "") {
    const completeList = [...copy.talksList, ...copy.worksList];
    const workToShow = completeList.find(w => w.nombre === section.workModal);
    return (
      <div>
        <WorkModal
          show={modalShowing}
          workToShow={workToShow}
          onClose={() => toggleWorkModal("")}
          mobile={mobile}
        />
      </div>
    );
  }

  return (
    <div>
      <ServiceModal
        show={modalShowing}
        workToShow={section.serviceModal}
        onClose={() => toggleWorkModal("")}
        mobile={mobile}
      />
    </div>
  );
}

const stateToProps = state => ({ copy: state.copy, section: state.section });
const dispatchToProps = dispatch => ({
  toggleWorkModal: modalName => dispatch(actions.toggleWorkModal(modalName))
});

export default connect(stateToProps, dispatchToProps)(ModalContainer);
