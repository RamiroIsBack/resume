import React from "react";
import style from "./styles";

class WorkModal extends React.Component {
  render() {
    // Render nothing if the 'show' prop is false
    if (!this.props.show) {
      return null;
    }

    return (
      <div style={style.modal.backdropStyle}>
        <div style={style.modal.stiloModal}>
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
              <div style={{ width: "60%" }}>
                <a onClick={() => window.open(this.props.workToShow.url)}>
                  <h4 style={{ fontWeight: "normal" }}>
                    {this.props.workToShow.url}
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
