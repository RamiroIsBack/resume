import React from "react";
import { useCopy } from "../../utils/useCopy";
import { useUI } from "../../context/UIContext";
import { ui } from "../../i18n/ui";
import { localize } from "../../utils/localize";
import "../../css"; // eslint-disable-line no-unused-vars

function SummaryContainer() {
  const { copyList } = useCopy();
  const { screenSize, lang, movetoSection, setImgLoaded } = useUI();
  const t = ui[lang];

  function handleImageLoaded() {
    // setTimeout ensures scroll position is not cached before layout settles
    setTimeout(() => setImgLoaded(true), 0);
  }
  function handleImageErrored() {
    setImgLoaded(false);
  }
  function handleClick() {
    movetoSection("footer");
    document.getElementById("footerContainer").scrollIntoView({ block: "start", behaviour: "smooth" });
  }

  const picCopy = copyList.find(item => item.nombre === "summaryPic") || {};
  const urlPic = picCopy.bio ? picCopy.urlPic : "";
  const bio = localize(picCopy, "bio", lang);
  const tablet = screenSize === "tablet" || screenSize === "mobile";

  return (
    <div>
      <div className="summary__container">
        {!tablet && (
          <div>
            <div className="summary__photo__container">
              <div className="summary__copy">
                <h2 className="head__line">{t.aboutMe}</h2>
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
              <h2 className="head__line">{t.aboutMeMobile}</h2>
              <h2 className="contact__button" onClick={handleClick}>{t.contactInfo}</h2>
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

export default SummaryContainer;
