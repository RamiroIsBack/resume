import React, { useEffect, useRef, useCallback } from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import "../../css"; // eslint-disable-line no-unused-vars
import IntroContainer from "../containers/IntroContainer";
import {
  AsyncModalContainer,
  AsyncFooterContainer,
  AsyncJobsLayout,
  AsyncNombreContainer,
  AsyncServicesContainer,
  AsyncSideBarContainer,
  AsyncSummaryContainer,
  AsyncTimeLineContainer
} from "../../utils/AsyncImports";
import Waypoint from "react-waypoint";

function App({ section, chageScreenWidth, changeScrollIndicator }) {
  const summarySection  = useRef(null);
  const workSection     = useRef(null);
  const servicesSection = useRef(null);
  const timeLineSection = useRef(null);
  const footerSection   = useRef(null);

  // Keeps the latest screenSize accessible from the resize handler without
  // making the handler a new function on every render.
  const screenSizeRef = useRef(section.screenSize);
  useEffect(() => { screenSizeRef.current = section.screenSize; });

  const focusSection = useCallback((target) => {
    const map = {
      summary:  summarySection,
      work:     workSection,
      services: servicesSection,
      timeLine: timeLineSection,
      footer:   footerSection,
    };
    map[target]?.current?.scrollIntoView({ block: "start", behaviour: "smooth" });
  }, []);

  // componentWillReceiveProps equivalent — fire when sectionSelected changes
  useEffect(() => {
    if (section.sectionSelected !== "") {
      focusSection(section.sectionSelected);
    }
  }, [section.sectionSelected, focusSection]);

  const handleWindowSizeChange = useCallback(() => {
    const w = window.innerWidth;
    if (w > 810 && screenSizeRef.current !== "laptop") chageScreenWidth("laptop");
    else if (w < 810 && w > 705 && screenSizeRef.current !== "tablet") chageScreenWidth("tablet");
    else if (w < 705 && screenSizeRef.current !== "mobile") chageScreenWidth("mobile");
  }, [chageScreenWidth]);

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, [handleWindowSizeChange]);

  const mobile = section.screenSize === "mobile";

  return (
    <div>
      <AsyncNombreContainer />
      <AsyncModalContainer />
      <div className="main__container">
        <div className="IntroContainer">
          <IntroContainer />
        </div>

        <div className="SummaryContainer" id="summaryContainer" ref={summarySection}>
          <Waypoint
            bottomOffset={200}
            onPositionChange={({ currentPosition }) => {
              if (currentPosition === "inside") changeScrollIndicator("summary");
            }}
          />
          {section.imgLoaded && <div className="section__headline">Professional Profile</div>}
          <AsyncSummaryContainer />
        </div>

        <div className="JobsLayout" id="workContainer" ref={workSection}>
          <Waypoint
            topOffset={"-200px"}
            bottomOffset={200}
            onPositionChange={({ currentPosition }) => {
              if (currentPosition === "inside")       changeScrollIndicator("work");
              else if (currentPosition === "below")   changeScrollIndicator("summary");
              else if (currentPosition === "above")   changeScrollIndicator("services");
            }}
          />
          {section.imgLoaded && <div className="section__headline">Most Recent Work</div>}
          <AsyncJobsLayout />
        </div>

        <div className="ServicesContainer" id="servicesContainer" ref={servicesSection}>
          {section.imgLoaded && <div className="section__headline">Skills and services</div>}
          <AsyncServicesContainer />
        </div>

        <div className="TimeLineContainer" id="timeLineContainer" ref={timeLineSection}>
          <Waypoint
            topOffset={-400}
            bottomOffset={"300px"}
            onPositionChange={({ currentPosition }) => {
              if (currentPosition === "inside")     changeScrollIndicator("timeLine");
              else if (currentPosition === "below") changeScrollIndicator("services");
            }}
          />
          {section.imgLoaded && (
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

        {mobile && section.imgLoaded && (
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

        <div className="FooterContainer" id="footerContainer" ref={footerSection}>
          <AsyncFooterContainer />
        </div>
      </div>
    </div>
  );
}

const stateToProps = state => ({ copy: state.copy, section: state.section });
const dispatchToProps = dispatch => ({
  chageScreenWidth: device => dispatch(actions.chageScreenWidth(device)),
  changeScrollIndicator: whereAmI => dispatch(actions.changeScrollIndicator(whereAmI)),
  movetoSection: section => dispatch(actions.movetoSection(section))
});

export default connect(stateToProps, dispatchToProps)(App);
