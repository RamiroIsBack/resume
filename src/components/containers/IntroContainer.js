import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import "../../css"; // eslint-disable-line no-unused-vars
import { PopularFunctions } from "../../utils";

function IntroContainer({ copy, getCopy }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    if (!copy.copyLoaded) {
      getCopy();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const introCopy = PopularFunctions.selectSpecificCopy({ copy }, "introPic");
  const urlPic = introCopy.urlPic || "";
  const animeIt = imgLoaded
    ? { animation: "fadeIntro 2s ease-in", opacity: "0.5" }
    : { opacity: "0" };

  return (
    <div>
      <div className="intro__foto__container">
        <img
          className="intro__foto"
          style={animeIt}
          src={urlPic}
          alt=""
          onLoad={() => setImgLoaded(true)}
          onError={() => console.log("waiting for intro img")}
        />
      </div>
    </div>
  );
}

const stateToProps = state => ({ copy: state.copy });
const dispatchToProps = dispatch => ({
  getCopy: () => dispatch(actions.getCopy())
});

export default connect(stateToProps, dispatchToProps)(IntroContainer);
