import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import { PopularFunctions } from "../../utils";
import { Sidebar_css } from "../../css"; // eslint-disable-line no-unused-vars

class SideBarContainer extends Component {
  handleSectionSelection(event) {
    let section = event.target.id;
    if (
      this.props.section.sectionSelected !== section &&
      this.props.section.scrollIndicator !== section
    ) {
      this.props.movetoSection(section);
    }
    //setting scroll indicator to {section} on the reducer
    if (this.props.section.screenSize === "mobile") {
      this.props.toggleMenu(!this.props.section.colapsed);
    }
  }
  toggleMenu() {
    this.props.toggleMenu(!this.props.section.colapsed);
  }

  render() {
    let styleSummary = {};
    let styleServices = {};
    let styleWork = {};
    let styleSTimeLine = {}; //summaryContainer servicesContainer timeLineContainer workContainer
    if (this.props.section.scrollIndicator === "summary") {
      styleSummary = {
        borderBottom: "2px solid rgb(81, 192, 242)"
      };
    } else if (this.props.section.scrollIndicator === "work") {
      styleWork = {
        borderBottom: "2px solid rgb(81, 192, 242)"
      };
    } else if (this.props.section.scrollIndicator === "services") {
      styleServices = {
        borderBottom: "2px solid rgb(81, 192, 242)"
      };
    } else if (this.props.section.scrollIndicator === "timeLine") {
      styleSTimeLine = {
        borderBottom: "2px solid rgb(81, 192, 242)"
      };
    }

    let copy = PopularFunctions.selectSpecificCopy(this.props, "sideBar");

    let colapsed = true;
    let arrowClose = copy.urlArrowClose;
    let arrowOpen = copy.urlArrowOpen;
    if (!this.props.section.colapsed) {
      colapsed = false;
    }
    let mobile = false;
    if (this.props.section.screenSize === "mobile") {
      // if(this.props.section.scrollIndicator === 'entry'){
      //   visual ={opacity:0};
      // }
      mobile = true;
    }
    return (
      <div>
        {!mobile && (
          <div>
            <h4
              className="sidebar__section__link "
              id="summary"
              style={styleSummary}
              onClick={this.handleSectionSelection.bind(this)}
            >
              Professional profile
            </h4>
            <h4
              className="sidebar__section__link"
              id="work"
              style={styleWork}
              onClick={this.handleSectionSelection.bind(this)}
            >
              Recent Work
            </h4>
            <h4
              className="sidebar__section__link"
              id="services"
              style={styleServices}
              onClick={this.handleSectionSelection.bind(this)}
            >
              Skills and services
            </h4>

            <h4
              className="sidebar__section__link"
              id="timeLine"
              style={styleSTimeLine}
              onClick={this.handleSectionSelection.bind(this)}
            >
              Time line resume
            </h4>

            <h4
              className="sidebar__section__link"
              id="footer"
              onClick={this.handleSectionSelection.bind(this)}
            >
              Contact
            </h4>
          </div>
        )}
        {mobile && (
          <div>
            {!colapsed && (
              <div className="sidebar__menu__container__mobile">
                <div className="sidebar__menu__arrow__colapse__container">
                  <img
                    className="sidebar__menu__arrow__colapse"
                    src={arrowClose}
                    alt="colapse"
                    onClick={this.toggleMenu.bind(this)}
                  />
                </div>
                <h4
                  className="sidebar__section__link "
                  id="summary"
                  style={styleSummary}
                  onClick={this.handleSectionSelection.bind(this)}
                >
                  Profile
                </h4>
                <h4
                  className="sidebar__section__link"
                  id="work"
                  style={styleWork}
                  onClick={this.handleSectionSelection.bind(this)}
                >
                  Work
                </h4>
                <h4
                  className="sidebar__section__link"
                  id="services"
                  style={styleServices}
                  onClick={this.handleSectionSelection.bind(this)}
                >
                  Skills
                </h4>

                <h4
                  className="sidebar__section__link"
                  id="timeLine"
                  style={styleSTimeLine}
                  onClick={this.handleSectionSelection.bind(this)}
                >
                  Resume
                </h4>

                <h4
                  className="sidebar__section__link"
                  id="footer"
                  onClick={this.handleSectionSelection.bind(this)}
                >
                  Contact
                </h4>
              </div>
            )}
            {colapsed && (
              <div className="sidebar__colapsed__photo__container__mobile">
                <img
                  className="sidebar__colapsed__photo__mobile"
                  src={arrowOpen}
                  alt="colapsed"
                  onClick={this.toggleMenu.bind(this)}
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

const dispatchToProps = dispatch => {
  return {
    toggleMenu: order => dispatch(actions.toggleMenu(order)),
    movetoSection: section => dispatch(actions.movetoSection(section)),
    changeScrollIndicator: whereAmI =>
      dispatch(actions.changeScrollIndicator(whereAmI))
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
)(SideBarContainer);
