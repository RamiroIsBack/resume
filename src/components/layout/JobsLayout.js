import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../actions";

import JobsListContainer from "../containers/JobsListContainer";
import Jobs_css from "../../css"; // eslint-disable-line no-unused-vars

class JobsLayout extends Component {
  render() {
    return (
      <div>
        <div>
          <JobsListContainer />
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
