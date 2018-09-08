import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import { Layout_css } from "../../css"; // eslint-disable-line no-unused-vars
import { IntroContainer } from "../containers";
import {
  AsyncWorkModalContainer,
  AsyncFooterContainer,
  AsyncJobsLayout,
  AsyncNombreContainer,
  AsyncServicesContainer,
  AsyncSideBarContainer,
  AsyncSummaryContainer,
  AsyncTimeLineContainer
} from "../../utils/AsyncImports";
import Waypoint from "react-waypoint";

class App extends Component {
  constructor() {
    super();
    this.summarySection = null;
    this.workSection = null; //summary work services timeLine footer
    this.servicesSection = null;
    this.resumekSection = null;
    this.timeLineSection = null;
    this.footerSection = null;

    this.focusSection = sectionSelected => {
      // Focus the text input using the raw DOM API
      if (this.workSection && sectionSelected === "work") {
        this.workSection.scrollIntoView({
          block: "start",
          behaviour: "smooth"
        });
      } else if (this.summarySection && sectionSelected === "summary") {
        this.summarySection.scrollIntoView({
          block: "start",
          behaviour: "smooth"
        });
      } else if (this.servicesSection && sectionSelected === "services") {
        this.servicesSection.scrollIntoView({
          block: "start",
          behaviour: "smooth"
        });
      } else if (this.resumeSection && sectionSelected === "resume") {
        this.resumeSection.scrollIntoView({
          block: "start",
          behaviour: "smooth"
        });
      } else if (this.timeLineSection && sectionSelected === "timeLine") {
        this.timeLineSection.scrollIntoView({
          block: "start",
          behaviour: "smooth"
        });
      } else if (this.footerSection && sectionSelected === "footer") {
        this.footerSection.scrollIntoView({
          block: "start",
          behaviour: "smooth"
        });
      }
    };
  }
  componentWillReceiveProps(newProps) {
    if (
      this.props.section.sectionSelected !== newProps.section.sectionSelected &&
      newProps.section.sectionSelected !== ""
    ) {
      this.focusSection(newProps.section.sectionSelected);
    }
  }
  componentDidMount() {
    this.handleWindowSizeChange();
    window.addEventListener("resize", this.handleWindowSizeChange.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener(
      "resize",
      this.handleWindowSizeChange.bind(this)
    );
  }

  handleWindowSizeChange() {
    if (window.innerWidth > 810 && this.props.section.screenSize !== "laptop") {
      this.props.chageScreenWidth("laptop");
    }
    if (
      window.innerWidth < 810 &&
      window.innerWidth > 705 &&
      this.props.section.screenSize !== "tablet"
    ) {
      this.props.chageScreenWidth("tablet");
    }
    if (window.innerWidth < 705 && this.props.section.screenSize !== "mobile") {
      this.props.chageScreenWidth("mobile");
    }
  }

  handleWorkWaypointEnter({ previousPosition, currentPosition }) {
    if (this.props.changeScrollIndicator) {
      //setting sectionSelected to '' on the reducer
      if (currentPosition === "inside") {
        this.props.changeScrollIndicator("work");
      } else if (currentPosition === "below") {
        this.props.changeScrollIndicator("summary");
      } else if (currentPosition === "above") {
        this.props.changeScrollIndicator("services");
      }
    }
  }
  handleTimeLineWaypointEnter({ previousPosition, currentPosition }) {
    //setting sectionSelected to '' on the reducer
    if (this.props.changeScrollIndicator) {
      if (currentPosition === "inside") {
        this.props.changeScrollIndicator("timeLine");
      } else if (currentPosition === "below") {
        this.props.changeScrollIndicator("services");
      }
    }
  }

  render() {
    let mobile = false;
    if (this.props.section.screenSize === "mobile") {
      mobile = true;
    }

    return (
      <div>
        <AsyncNombreContainer />
        <AsyncWorkModalContainer />
        <div className="main__container">
          <div className="IntroContainer">
            <IntroContainer />
          </div>
          <div
            className="SummaryContainer"
            id="summaryContainer"
            ref={element => (this.summarySection = element)}
          >
            {this.props.section.imgLoaded && (
              <div className="section__headline">Professional Profile</div>
            )}
            <AsyncSummaryContainer />
          </div>

          <div
            className="JobsLayout"
            id="workContainer"
            ref={element => (this.workSection = element)}
          >
            <Waypoint
              onPositionChange={({ previousPosition, currentPosition }) => {
                this.handleWorkWaypointEnter({
                  previousPosition,
                  currentPosition
                });
              }}
            />

            {this.props.section.imgLoaded && (
              <div className="section__headline">Most Recent Work</div>
            )}
            <AsyncJobsLayout />
          </div>

          <div
            className="ServicesContainer"
            id="servicesContainer"
            ref={element => (this.servicesSection = element)}
          >
            {this.props.section.imgLoaded && (
              <div className="section__headline">Skills and services</div>
            )}
            <AsyncServicesContainer />
          </div>

          <div
            className="TimeLineContainer"
            id="timeLineContainer"
            ref={element => (this.timeLineSection = element)}
          >
            <Waypoint
              onPositionChange={({ previousPosition, currentPosition }) => {
                this.handleTimeLineWaypointEnter({
                  previousPosition,
                  currentPosition
                });
              }}
            />

            {this.props.section.imgLoaded && (
              <div className="section__headline">
                Time-line resume
                <div className="section__secondLiner__container">
                  <div className="section__secondLiner__work">Work</div>
                  <div className="section__secondLiner__studies">Studies</div>
                </div>
              </div>
            )}
            <AsyncTimeLineContainer />
          </div>
          {mobile &&
            this.props.section.imgLoaded && (
              <div className="sidebarColapsable__contaniner">
                <AsyncSideBarContainer />
              </div>
            )}
          {!mobile && (
            <div className="SideBarSpace">
              <div className="sidebar__contaniner">
                <AsyncSideBarContainer />
              </div>
            </div>
          )}
          <div
            className="FooterContainer"
            id="footerContainer"
            ref={element => (this.footerSection = element)}
          >
            <AsyncFooterContainer />
          </div>
        </div>
      </div>
    );
  }
}

const dispatchToProps = dispatch => {
  return {
    chageScreenWidth: device => dispatch(actions.chageScreenWidth(device)),
    changeScrollIndicator: whereAmI =>
      dispatch(actions.changeScrollIndicator(whereAmI)),
    movetoSection: section => dispatch(actions.movetoSection(section))
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
)(App);
