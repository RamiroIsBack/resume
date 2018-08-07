import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../actions";

import JobsListContainer from "../containers/JobsListContainer";
import SelectedJobContainer from "../containers/SelectedJobContainer";

import JobCss from "../../css"; // eslint-disable-line no-unused-vars

import { PopularFunctions } from "../../utils";

class JobsLayout extends Component {
  render() {
    return (
      <div>
        mucho Layout!!!
        <div>
          <JobsListContainer />
        </div>
        <div>
          <SelectedJobContainer />
        </div>
      </div>
    );
  }
}
const dispatchToProps = dispatch => {
  return {
    changeJobSelected: selection =>
      dispatch(actions.changeJobSelected(selection))
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
)(JobsLayout);
