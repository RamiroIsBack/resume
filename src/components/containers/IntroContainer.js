import React, { useState } from "react";
import { useCopy } from "../../utils/useCopy";
import "../../css"; // eslint-disable-line no-unused-vars

function IntroContainer() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const { copyList } = useCopy();

  const introCopy = copyList.find(item => item.nombre === "introPic") || {};
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

export default IntroContainer;
