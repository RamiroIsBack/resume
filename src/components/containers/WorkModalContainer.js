import React, { Component } from "react";
import { WorkModal } from "../presentational";

import { connect } from "react-redux";
import actions from "../../actions";

class WorkModalContainer extends Component {
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
    var workModalShowing = false;
    var workToShow = {};

    if (this.props.section) {
      workModalShowing = this.props.section.workModal !== "" ? true : false;
    }
    // Render nothing if the "show" prop is false
    if (!workModalShowing) {
      return null;
    }
    if (this.props.copy) workToShow = this.getWorkCopyToShow();

    return (
      <div>
        <WorkModal
          show={workModalShowing}
          workToShow={workToShow}
          onClose={() => this.props.toggleWorkModal("")}
          mobile={this.props.section.screenSize === "mobile" ? true : false}
        />
      </div>
    );
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
)(WorkModalContainer);
