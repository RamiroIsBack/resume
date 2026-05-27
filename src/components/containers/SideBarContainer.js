import React from "react";
import { useCopy } from "../../utils/useCopy";
import { useUI } from "../../context/UIContext";
import "../../css"; // eslint-disable-line no-unused-vars

const ACTIVE = { borderBottom: "2px solid rgb(81, 192, 242)" };

function SideBarContainer() {
  const { copyList } = useCopy();
  const { screenSize, sectionSelected, scrollIndicator, colapsed, movetoSection, toggleMenu } = useUI();

  function handleSectionSelection(event) {
    const id = event.target.id;
    if (sectionSelected !== id && scrollIndicator !== id) {
      movetoSection(id);
    }
    if (screenSize === "mobile") {
      toggleMenu(!colapsed);
    }
  }

  const ind = scrollIndicator;
  const styleSummary  = ind === "summary"  ? ACTIVE : {};
  const styleWork     = ind === "work"     ? ACTIVE : {};
  const styleServices = ind === "services" ? ACTIVE : {};
  const styleTimeLine = ind === "timeLine" ? ACTIVE : {};

  const sideBarCopy = copyList.find(item => item.nombre === "sideBar") || {};
  const isColapsed = colapsed !== false;
  const mobile = screenSize === "mobile";

  return (
    <div>
      {!mobile && (
        <div>
          <h4 className="sidebar__section__link"  id="summary"  style={styleSummary}  onClick={handleSectionSelection}>Professional profile</h4>
          <h4 className="sidebar__section__link"  id="work"     style={styleWork}     onClick={handleSectionSelection}>Recent Work</h4>
          <h4 className="sidebar__section__link"  id="services" style={styleServices} onClick={handleSectionSelection}>Skills and services</h4>
          <h4 className="sidebar__section__link"  id="timeLine" style={styleTimeLine} onClick={handleSectionSelection}>Time line resume</h4>
          <h4 className="sidebar__section__link"  id="footer"                         onClick={handleSectionSelection}>Contact</h4>
        </div>
      )}
      {mobile && (
        <div>
          {!isColapsed && (
            <div className="sidebar__menu__container__mobile">
              <div className="sidebar__menu__arrow__colapse__container">
                <img className="sidebar__menu__arrow__colapse" src={sideBarCopy.urlArrowClose} alt="colapse" onClick={() => toggleMenu(!colapsed)} />
              </div>
              <h4 className="sidebar__section__link"  id="summary"  style={styleSummary}  onClick={handleSectionSelection}>Profile</h4>
              <h4 className="sidebar__section__link"  id="work"     style={styleWork}     onClick={handleSectionSelection}>Work</h4>
              <h4 className="sidebar__section__link"  id="services" style={styleServices} onClick={handleSectionSelection}>Skills</h4>
              <h4 className="sidebar__section__link"  id="timeLine" style={styleTimeLine} onClick={handleSectionSelection}>Resume</h4>
              <h4 className="sidebar__section__link"  id="footer"                         onClick={handleSectionSelection}>Contact</h4>
            </div>
          )}
          {isColapsed && (
            <div className="sidebar__colapsed__photo__container__mobile">
              <img className="sidebar__colapsed__photo__mobile" src={sideBarCopy.urlArrowOpen} alt="colapsed" onClick={() => toggleMenu(!colapsed)} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SideBarContainer;
