import React from "react";
import { useCopy } from "../../utils/useCopy";
import { useUI } from "../../context/UIContext";
import { TimeBox } from "../presentational";
import "../../css"; // eslint-disable-line no-unused-vars

function TimeLineContainer() {
  const { timeLineList } = useCopy();
  const { screenSize, lang } = useUI();

  function handleClick(url) {
    if (url !== "falta") {
      window.open(url, "_blank");
    }
  }

  const timeLineJsx = timeLineList.length !== 0
    ? timeLineList.map((item, i) => (
        <div className={item.className} key={i}>
          <TimeBox urlClick={handleClick} copy={item} screenSize={screenSize} lang={lang} />
        </div>
      ))
    : [];

  return (
    <div className="timeLine__container">
      {timeLineJsx}
      <div className="line" />
      <div className="year__container">
        <div className="twentyseven">2027</div>
        <div className="twentyfive">2025</div>
        <div className="twentyone">2021</div>
        <div className="twenty">2020</div>
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

export default TimeLineContainer;
