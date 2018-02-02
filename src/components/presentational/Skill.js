import React, {Component} from 'react';
import {Skills_css} from '../../css';

class Skill extends Component {


  render() {


    return (
      <div >
        <h3>{this.props.skillInfo.nombre}</h3>
      </div>
    );
  }
}

export default Skill;
