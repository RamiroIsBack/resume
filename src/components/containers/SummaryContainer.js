import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import { PopularFunctions } from "../../utils";
import { Summary_css } from "../../css"; // eslint-disable-line no-unused-vars

class SummaryContainer extends Component {
  handleImageLoaded() {
    setTimeout(() => {
      //this function is called when everything else is done,
      // this way we ensure that is not caching false scroll inputs
      this.props.imgLoaded(true);
    }, 0);
  }
  handleImageErrored() {
    this.props.imgLoaded(false);
  }
  handleClick() {
    this.props.movetoSection("footer");
    const element = document.getElementById("footerContainer");
    element.scrollIntoView({ block: "start", behaviour: "smooth" });
  }

  render() {
    let urlPic = "";
    let bio = "";

    let copy = PopularFunctions.selectSpecificCopy(this.props, "summaryPic");

    if (copy.bio) {
      urlPic = copy.urlPic;
      bio = copy.bio;
    }
    let tablet = false;
    if (
      this.props.section.screenSize === "tablet" ||
      this.props.section.screenSize === "mobile"
    ) {
      tablet = true;
    }

    return (
      <div>
        <div className="summary__container">
          {!tablet && (
            <div>
              <div className="summary__photo__container">
                <div className="summary__copy">
                  <h2 className="head__line">About me:</h2>
                  <div className="bio__container">
                    {bio.split("\n").map((item, key) => {
                      return (
                        <span className="bio" key={key}>
                          {item}
                          <div>
                            <br />
                          </div>
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <img
                    className="summary__photo"
                    src={urlPic}
                    alt=""
                    onLoad={this.handleImageLoaded.bind(this)}
                    onError={this.handleImageErrored.bind(this)}
                  />
                </div>
              </div>
            </div>
          )}
          {tablet && (
            <div>
              <div className="headLine__andPhoto__container">
                <h2 className="head__line">Some words about me:</h2>
                <h2
                  className="contact__button"
                  onClick={this.handleClick.bind(this)}
                >
                  Contact info
                </h2>
                <div className="summary__photo__container">
                  <img
                    className="summary__photo"
                    src={urlPic}
                    alt=""
                    onLoad={this.handleImageLoaded.bind(this)}
                    onError={this.handleImageErrored.bind(this)}
                  />
                </div>
              </div>
              <div className="summary__copy">
                <div className="bio__container">
                  {bio.split("\n").map((item, key) => {
                    return (
                      <span className="bio" key={key}>
                        {item}
                        <br />
                        <br />
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const dispatchToProps = dispatch => {
  return {
    movetoSection: section => dispatch(actions.movetoSection(section)),
    getCopy: () => dispatch(actions.getCopy()),
    imgLoaded: loaded => dispatch(actions.imgLoaded(loaded))
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
)(SummaryContainer);
