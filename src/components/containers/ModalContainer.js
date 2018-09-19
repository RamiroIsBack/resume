import React, { Component } from "react";
import { ServiceModal, WorkModal } from "../presentational";

import { connect } from "react-redux";
import actions from "../../actions";

class ModalContainer extends Component {
  moveToCreacionesSection(Name) {
    this.props.moveToCreacionesSection(Name);
    this.props.toggleModal("closeMenuXs");
  }

  toggleModal() {
    this.props.toggleWorkModal("");
  }
  getWorkCopyToShow() {
    let workSelectedName = this.props.section.workModal;
    let completeList = [
      ...this.props.copy.talksList,
      ...this.props.copy.worksList
    ];
    return completeList.find(work => work.nombre === workSelectedName);
  }

  render() {
    var modalShowing = false;

    if (this.props.section) {
      if (
        this.props.section.workModal !== "" ||
        this.props.section.serviceModal !== ""
      ) {
        modalShowing = true;
      }
    }
    // Render nothing if the "show" prop is false
    if (!modalShowing) {
      return null;
    }
    if (this.props.section.workModal !== "") {
      var workToShow = this.getWorkCopyToShow();
      return (
        <div>
          <WorkModal
            show={modalShowing}
            workToShow={workToShow}
            onClose={() => this.props.toggleWorkModal("")}
            mobile={this.props.section.screenSize === "mobile" ? true : false}
          />
        </div>
      );
    } else {
      var serviceToShow = this.props.section.serviceModal;
      return (
        <div>
          <ServiceModal
            show={modalShowing}
            workToShow={serviceToShow}
            onClose={() => this.props.toggleWorkModal("")}
            mobile={this.props.section.screenSize === "mobile" ? true : false}
          />
        </div>
      );
    }
  }
}
const dispatchToProps = dispatch => {
  return {
    toggleWorkModal: modalName => dispatch(actions.toggleWorkModal(modalName))
  };
};

const stateToProps = state => {
  return {
    copy: state.copy,
    section: state.section
  };
};

export default connect(
  stateToProps,
  dispatchToProps
)(ModalContainer);
