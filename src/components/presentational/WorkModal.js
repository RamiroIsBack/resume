import React from "react";
import style from "./styles";
import YouTube from "react-youtube";

class WorkModal extends React.Component {
  handleVideo() {
    if (this.props.workToShow.urlVideo) {
      if (this.props.mobile) {
        return this.props.workToShow.urlVideo;
      } else {
        const opts = {
          height: "390",
          width: "640",
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0
          }
        };
        let idForVideo = this.props.workToShow.urlVideo.substring(
          this.props.workToShow.urlVideo.indexOf("=") + 1,
          this.props.workToShow.urlVideo.length
        );
        return (
          <YouTube videoId={idForVideo} opts={opts} onReady={this._onReady} />
        );
      }
    } else {
      return null;
    }
  }
  render() {
    // Render nothing if the 'show' prop is false
    if (!this.props.show) {
      return null;
    }
    let mobileStyle = this.props.mobile ? { right: "300px" } : null;

    return (
      <div style={style.modal.backdropStyle}>
        <div
          style={{
            ...style.modal.stiloModal,
            ...mobileStyle
          }}
        >
          <div>
            <div style={style.modal.formContainer}>
              <div onClick={this.props.onClose} style={style.modal.btnClose}>
                X
              </div>
              <div style={{ width: "60%" }}>
                <h3>{this.props.workToShow.nombre}</h3>
              </div>

              <div style={{ width: "90%" }}>
                <h4 style={{ fontWeight: "normal" }}>
                  {this.props.workToShow.bio}
                </h4>
              </div>
              <div style={{ width: "60%" }}>
                <h5 style={{ fontWeight: "lighter" }}>
                  {this.props.workToShow.date}
                </h5>
              </div>
              {this.props.workToShow.urlPic2 && (
                <div style={{ width: "100%" }}>
                  <img
                    style={{ maxWidth: "90%" }}
                    alt={this.props.workToShow.nombre}
                    src={this.props.workToShow.urlPic2}
                  />
                </div>
              )}
              {this.props.workToShow.url ? (
                <p>visit site:</p>
              ) : this.props.workToShow.urlVideo ? (
                <p>watch video:</p>
              ) : null}

              <div style={{ width: "60%", cursor: "pointer" }}>
                <a
                  onClick={() =>
                    window.open(
                      this.props.workToShow.url
                        ? this.props.workToShow.url
                        : this.props.workToShow.urlVideo
                    )
                  }
                >
                  <h4
                    style={{
                      color: "blue",
                      margin: "0,0,10,0",
                      fontWeight: "normal"
                    }}
                  >
                    {this.props.workToShow.url
                      ? this.props.workToShow.url
                      : this.handleVideo()}
                  </h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkModal;
