import React from "react";
import style from "./styles";

class ServiceModal extends React.Component {
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

              {this.props.workToShow.urlPic1 && (
                <div style={{ width: "100%" }}>
                  <img
                    style={{ maxWidth: "90%" }}
                    alt={this.props.workToShow.nombre}
                    src={this.props.workToShow.urlPic1}
                  />
                </div>
              )}
              {this.props.workToShow.urlPic2 && (
                <div style={{ width: "100%" }}>
                  <img
                    style={{ maxWidth: "90%" }}
                    alt={this.props.workToShow.nombre}
                    src={this.props.workToShow.urlPic2}
                  />
                </div>
              )}
              {this.props.workToShow.urlPic3 && (
                <div style={{ width: "100%" }}>
                  <img
                    style={{ maxWidth: "90%" }}
                    alt={this.props.workToShow.nombre}
                    src={this.props.workToShow.urlPic3}
                  />
                </div>
              )}
              {this.props.workToShow.urlPic && (
                <div style={{ width: "100%" }}>
                  <img
                    style={{ maxWidth: "90%" }}
                    alt={this.props.workToShow.nombre}
                    src={this.props.workToShow.urlPic}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceModal;
