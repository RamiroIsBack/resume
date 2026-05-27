import React from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import { Service } from "../presentational";
import "../../css"; // eslint-disable-line no-unused-vars

function ServicesContainer({ copy, section, openModal }) {
  const animeIt = section.scrollIndicator === "services";
  const servicesList = copy && copy.servicesList.length !== 0
    ? copy.servicesList.map((item, i) => (
        <div key={i}>
          <Service sectionSelected={animeIt} serviceInfo={item} openModal={openModal} />
        </div>
      ))
    : [];

  return <div className="services__container">{servicesList}</div>;
}

const stateToProps = state => ({ copy: state.copy, section: state.section });
const dispatchToProps = dispatch => ({
  openModal: serviceInfo => dispatch(actions.toggleWorkModal(serviceInfo))
});

export default connect(stateToProps, dispatchToProps)(ServicesContainer);
