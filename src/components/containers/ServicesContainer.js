import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import { Service } from "../presentational";
import { Services_css } from "../../css"; // eslint-disable-line no-unused-vars

class ServicesContainer extends Component {
  constructor() {
    super();
    this.state = {
      animatedAlready: false
    };
  }
  openModal(serviceInfo) {
    this.props.openModal(serviceInfo);
  }
  getServicesComponents(rawList) {
    let servicesComponentList = [];
    let animeIt = false;
    if (this.props.section.scrollIndicator === "services") {
      animeIt = true;
    }

    for (let i = 0; i < rawList.length; i++) {
      servicesComponentList.push(
        <div key={i}>
          <Service
            sectionSelected={animeIt}
            serviceInfo={rawList[i]}
            openModal={this.openModal.bind(this)}
          />
        </div>
      );
    }
    return servicesComponentList;
  }

  render() {
    let servicesList = [];
    if (this.props.copy) {
      if (this.props.copy.servicesList.length !== 0) {
        servicesList = this.getServicesComponents(this.props.copy.servicesList);
      }
    }

    return <div className="services__container">{servicesList}</div>;
  }
}

const dispatchToProps = dispatch => {
  return {
    getCopy: () => dispatch(actions.getCopy()),
    openModal: serviceInfo => dispatch(actions.toggleWorkModal(serviceInfo))
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
)(ServicesContainer);
