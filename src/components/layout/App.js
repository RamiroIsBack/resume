import React, { useEffect, useRef, useCallback } from "react";
import { useUI } from "../../context/UIContext";
import { ui } from "../../i18n/ui";
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

function LangToggle({ lang, setLang }) {
  const isEn = lang === "en";
  return (
    <div
      onClick={() => setLang(isEn ? "es" : "en")}
      style={{ position: "fixed", top: 15, right: 80, zIndex: 1000, cursor: "pointer", userSelect: "none" }}
    >
      <div style={{ position: "relative", background: "rgba(0,0,0,0.65)", border: "1px solid rgba(255,255,255,0.35)", borderRadius: 20, padding: "3px", display: "flex", alignItems: "center" }}>
        <div style={{
          position: "absolute",
          top: 3,
          left: isEn ? 3 : "calc(50% + 1px)",
          width: "calc(50% - 4px)",
          height: "calc(100% - 6px)",
          background: "rgba(255,255,255,0.22)",
          borderRadius: 16,
          transition: "left 0.2s ease",
        }} />
        <span style={{ position: "relative", padding: "4px 14px", fontSize: 13, fontWeight: "bold", color: "white", zIndex: 1 }}>EN</span>
        <span style={{ position: "relative", padding: "4px 14px", fontSize: 13, fontWeight: "bold", color: "white", zIndex: 1 }}>ES</span>
      </div>
    </div>
  );
}

function App() {
  const { screenSize, sectionSelected, imgLoaded, lang, chageScreenWidth, changeScrollIndicator, setLang } = useUI();
  const t = ui[lang];

  const summarySection  = useRef(null);
  const workSection     = useRef(null);
  const servicesSection = useRef(null);
  const timeLineSection = useRef(null);
  const footerSection   = useRef(null);

  const screenSizeRef = useRef(screenSize);
  useEffect(() => { screenSizeRef.current = screenSize; });

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

  useEffect(() => {
    if (sectionSelected !== "") focusSection(sectionSelected);
  }, [sectionSelected, focusSection]);

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

  const mobile = screenSize === "mobile";

  return (
    <div>
      <LangToggle lang={lang} setLang={setLang} />

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
          {imgLoaded && <div className="section__headline">{t.sectionProfile}</div>}
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
          {imgLoaded && <div className="section__headline">{t.sectionWork}</div>}
          <AsyncJobsLayout />
        </div>

        <div className="ServicesContainer" id="servicesContainer" ref={servicesSection}>
          {imgLoaded && <div className="section__headline">{t.sectionSkills}</div>}
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
          {imgLoaded && (
            <div className="section__headline">
              {t.sectionTimeline}
              <div className="section__secondLiner__container">
                <div className="section__secondLiner__work">{t.timelineWork}</div>
                <div className="section__secondLiner__studies">{t.timelineStudies}</div>
              </div>
            </div>
          )}
          <AsyncTimeLineContainer />
        </div>

        {mobile && imgLoaded && (
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

export default App;
