import React, { Component } from "react";
import actions from "../../actions";
import { connect } from "react-redux";
import Works_css from "../../css"; // eslint-disable-line no-unused-vars
import Work from "../presentational/Work";
//import SelectedWork from "../presentational/SelectedWork";

class JobsContainer extends Component {
  produceWorkListJsx = (list, type, selectedName) => {
    let selected = false;
    return list.map(element => {
      selectedName === element.nombre ? (selected = true) : (selected = false);
      return (
        <Work
          key={element.nombre}
          copy={element}
          selected={selected}
          type={type}
          changeWorkSelected={this.changeWorkSelected}
        />
      );
    });
  };
  // produceSelectedWorkJsx = (list, selected) => {
  //   let copy = {};
  //   for (let i in list) {
  //     copy = list[i];
  //     if (selected === copy.nombre) {
  //       break;
  //     }
  //   }
  //   return <SelectedWork copy={copy} />;
  // };
  changeWorkSelected = selection => {
    if (this.props.section.workSelected !== selection) {
      this.props.changeWorkSelected(selection);
    }
    this.props.toggleWorkModal(selection);
  };
  render() {
    let worksJsxList = [];
    let talksJsxList = [];
    //let selectedWork = {};
    if (this.props.copy) {
      if (this.props.copy.copyLoaded) {
        worksJsxList = this.produceWorkListJsx(
          this.props.copy.worksList,
          "app",
          this.props.section.workSelected
        );
        talksJsxList = this.produceWorkListJsx(
          this.props.copy.talksList,
          "talk",
          this.props.section.workSelected
        );
        // selectedWork = this.produceSelectedWorkJsx(
        //   [...this.props.copy.talksList, ...this.props.copy.worksList],
        //   this.props.section.workSelected
        // );
        return (
          <div>
            <div className="works__list__container">
              {worksJsxList}
              {talksJsxList}
            </div>
          </div>
        );
      }
      //mockup for the works!!
      return <div />;
    }
  }
}
const stateToProps = state => {
  return {
    copy: state.copy,
    section: state.section
  };
};
const dispatchToProps = dispatch => {
  return {
    changeWorkSelected: WorkSelection =>
      dispatch(actions.changeWorkSelected(WorkSelection)),
    toggleWorkModal: WorkSelection =>
      dispatch(actions.toggleWorkModal(WorkSelection))
  };
};
export default connect(
  stateToProps,
  dispatchToProps
)(JobsContainer);
