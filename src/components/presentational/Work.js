import React, { Component } from "react";
import Works_css from "../../css"; // eslint-disable-line no-unused-vars
class Work extends Component {
  render() {
    let typeAndState = this.props.type;
    let selectedStyle = {};
    if (this.props.type === "app") {
      typeAndState = `${this.props.copy.state}`;
    }
    if (this.props.selected) {
      selectedStyle = { borderBottom: "2px solid rgb(81, 192, 242)" };
    }
    return (
      <div
        className="work__container"
        onClick={() => this.props.changeWorkSelected(this.props.copy.nombre)}
      >
        <div className="work__title__container" style={selectedStyle}>
          <h2>{this.props.copy.nombreToShow}</h2>
        </div>
        <div className="work__title__container">
          <h3
            style={{
              opacity: "0.5",
              fontWeight: 100,
              margin: 0,
              marginBottom: 6
            }}
          >
            {typeAndState}
          </h3>
        </div>
        <div className="work__pic__container">
          <img
            className="work__pic"
            alt={this.props.copy.nombre}
            src={this.props.copy.urlPic}
          />
        </div>
        {!this.props.mobile && (
          <div className="work__bio__container">
            <p>{this.props.copy.bio}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Work;
