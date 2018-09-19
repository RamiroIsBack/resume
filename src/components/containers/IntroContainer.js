import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import { Intro_css } from "../../css"; // eslint-disable-line no-unused-vars
import { PopularFunctions } from "../../utils";

class IntroContainer extends Component {
  constructor() {
    super();
    this.state = {
      imgLoaded: false
    };
  }
  componentDidMount() {
    if (!this.props.copy.copyLoaded) {
      this.props.getCopy();
    }
  }
  handleImageLoaded() {
    this.setState({ imgLoaded: true });
  }
  handleImageErrored() {
    console.log("waiting for intro img");
  }

  render() {
    let copy = PopularFunctions.selectSpecificCopy(this.props, "introPic");
    let urlPic = "";
    if (copy.urlPic) {
      urlPic = copy.urlPic;
    }

    let animeIt = {};

    if (this.state.imgLoaded) {
      animeIt = {
        animation: "fadeIntro 2s ease-in",
        opacity: "0.5"
      };
    } else {
      animeIt = {
        opacity: "0"
      };
    }

    return (
      <div>
        <div className="intro__foto__container">
          <img
            className="intro__foto"
            style={animeIt}
            src={urlPic}
            alt=""
            onLoad={this.handleImageLoaded.bind(this)}
            onError={this.handleImageErrored.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const dispatchToProps = dispatch => {
  return {
    getCopy: () => dispatch(actions.getCopy())
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
)(IntroContainer);
