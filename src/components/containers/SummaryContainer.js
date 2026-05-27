import React from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import { PopularFunctions } from "../../utils";
import "../../css"; // eslint-disable-line no-unused-vars

function SummaryContainer({ copy, section, movetoSection, imgLoaded }) {
  function handleImageLoaded() {
    // setTimeout ensures scroll position is not cached before layout settles
    setTimeout(() => imgLoaded(true), 0);
  }
  function handleImageErrored() {
    imgLoaded(false);
  }
  function handleClick() {
    movetoSection("footer");
    document.getElementById("footerContainer").scrollIntoView({ block: "start", behaviour: "smooth" });
  }

  const picCopy = PopularFunctions.selectSpecificCopy({ copy }, "summaryPic");
  const urlPic = picCopy.bio ? picCopy.urlPic : "";
  const bio = picCopy.bio || "";
  const tablet = section.screenSize === "tablet" || section.screenSize === "mobile";

  return (
    <div>
      <div className="summary__container">
        {!tablet && (
          <div>
            <div className="summary__photo__container">
              <div className="summary__copy">
                <h2 className="head__line">About me:</h2>
                <div className="bio__container">
                  {bio.split("\n").map((item, key) => (
                    <span className="bio" key={key}>{item}<div><br /></div></span>
                  ))}
                </div>
              </div>
              <div>
                <img className="summary__photo" src={urlPic} alt="" onLoad={handleImageLoaded} onError={handleImageErrored} />
              </div>
            </div>
          </div>
        )}
        {tablet && (
          <div>
            <div className="headLine__andPhoto__container">
              <h2 className="head__line">Some words about me:</h2>
              <h2 className="contact__button" onClick={handleClick}>Contact info</h2>
              <div className="summary__photo__container">
                <img className="summary__photo" src={urlPic} alt="" onLoad={handleImageLoaded} onError={handleImageErrored} />
              </div>
            </div>
            <div className="summary__copy">
              <div className="bio__container">
                {bio.split("\n").map((item, key) => (
                  <span className="bio" key={key}>{item}<br /><br /></span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const stateToProps = state => ({ copy: state.copy, section: state.section });
const dispatchToProps = dispatch => ({
  movetoSection: section => dispatch(actions.movetoSection(section)),
  imgLoaded: loaded => dispatch(actions.imgLoaded(loaded))
});

export default connect(stateToProps, dispatchToProps)(SummaryContainer);
