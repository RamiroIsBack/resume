import React, { Component } from "react";
import Works_css from "../../css"; // eslint-disable-line no-unused-vars

class SelectedWork extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.copy.nombre}</h2>
        <p>{this.props.copy.bio}</p>
      </div>
    );
  }
}

export default SelectedWork;
