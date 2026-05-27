import React from "react";
import { connect } from "react-redux";
import { TimeBox } from "../presentational";
import "../../css"; // eslint-disable-line no-unused-vars

function TimeLineContainer({ copy, section }) {
  function handleClick(url) {
    if (url !== "falta") {
      window.open(url, "_blank");
    }
  }

  const timeLineList = copy && copy.timeLineList.length !== 0
    ? copy.timeLineList.map((item, i) => (
        <div className={item.className} key={i}>
          <TimeBox urlClick={handleClick} copy={item} screenSize={section.screenSize} />
        </div>
      ))
    : [];

  return (
    <div className="timeLine__container">
      {timeLineList}
      <div className="line" />
      <div className="year__container">
        <div className="nineteen">2019</div>
        <div className="eighteen">2018</div>
        <div className="seventeen">2017</div>
        <div className="sixteen">2016</div>
        <div className="fiveteen">2015</div>
        <div className="twelve">2012</div>
        <div className="ten">2010</div>
        <div className="eight">2008</div>
        <div className="five">2005</div>
        <div className="zero">2000</div>
      </div>
    </div>
  );
}

const stateToProps = state => ({ copy: state.copy, section: state.section });

export default connect(stateToProps)(TimeLineContainer);
