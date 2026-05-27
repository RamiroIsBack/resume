import React from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import { PopularFunctions } from "../../utils";
import "../../css"; // eslint-disable-line no-unused-vars

const ACTIVE = { borderBottom: "2px solid rgb(81, 192, 242)" };

function SideBarContainer({ copy, section, movetoSection, toggleMenu }) {
  function handleSectionSelection(event) {
    const id = event.target.id;
    if (section.sectionSelected !== id && section.scrollIndicator !== id) {
      movetoSection(id);
    }
    if (section.screenSize === "mobile") {
      toggleMenu(!section.colapsed);
    }
  }

  const ind = section.scrollIndicator;
  const styleSummary  = ind === "summary"  ? ACTIVE : {};
  const styleWork     = ind === "work"     ? ACTIVE : {};
  const styleServices = ind === "services" ? ACTIVE : {};
  const styleTimeLine = ind === "timeLine" ? ACTIVE : {};

  const sideBarCopy = PopularFunctions.selectSpecificCopy({ copy }, "sideBar");
  const colapsed = section.colapsed !== false;
  const mobile = section.screenSize === "mobile";

  return (
    <div>
      {!mobile && (
        <div>
          <h4 className="sidebar__section__link " id="summary" style={styleSummary} onClick={handleSectionSelection}>Professional profile</h4>
          <h4 className="sidebar__section__link"  id="work"    style={styleWork}     onClick={handleSectionSelection}>Recent Work</h4>
          <h4 className="sidebar__section__link"  id="services" style={styleServices} onClick={handleSectionSelection}>Skills and services</h4>
          <h4 className="sidebar__section__link"  id="timeLine" style={styleTimeLine} onClick={handleSectionSelection}>Time line resume</h4>
          <h4 className="sidebar__section__link"  id="footer"  onClick={handleSectionSelection}>Contact</h4>
        </div>
      )}
      {mobile && (
        <div>
          {!colapsed && (
            <div className="sidebar__menu__container__mobile">
              <div className="sidebar__menu__arrow__colapse__container">
                <img className="sidebar__menu__arrow__colapse" src={sideBarCopy.urlArrowClose} alt="colapse" onClick={() => toggleMenu(!section.colapsed)} />
              </div>
              <h4 className="sidebar__section__link " id="summary"  style={styleSummary}  onClick={handleSectionSelection}>Profile</h4>
              <h4 className="sidebar__section__link"  id="work"     style={styleWork}     onClick={handleSectionSelection}>Work</h4>
              <h4 className="sidebar__section__link"  id="services" style={styleServices} onClick={handleSectionSelection}>Skills</h4>
              <h4 className="sidebar__section__link"  id="timeLine" style={styleTimeLine} onClick={handleSectionSelection}>Resume</h4>
              <h4 className="sidebar__section__link"  id="footer"   onClick={handleSectionSelection}>Contact</h4>
            </div>
          )}
          {colapsed && (
            <div className="sidebar__colapsed__photo__container__mobile">
              <img className="sidebar__colapsed__photo__mobile" src={sideBarCopy.urlArrowOpen} alt="colapsed" onClick={() => toggleMenu(!section.colapsed)} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const stateToProps = state => ({ copy: state.copy, section: state.section });
const dispatchToProps = dispatch => ({
  toggleMenu: order => dispatch(actions.toggleMenu(order)),
  movetoSection: section => dispatch(actions.movetoSection(section))
});

export default connect(stateToProps, dispatchToProps)(SideBarContainer);
