import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../../actions'
import {Nombre_css} from '../../css'; // eslint-disable-line no-unused-vars

class NombreContainer extends Component {


  render() {


    return (
      <div className = 'nombre__contaniner'>
        <h3 className = 'saludo'>Hi! I'm</h3>
        <h3 className = 'nombre'>Ramiro Santamaria</h3>
        <h3 className = 'puesto' >App Developer</h3>
      </div>
    );
  }
}

const dispatchToProps = (dispatch) =>{

  return{
    getCopy: () => dispatch(actions.getCopy()),

  };
};
const stateToProps = (state) => {
  return{
    copy :state.copy,
    section: state.section,
  };
};

export default connect (stateToProps,dispatchToProps)(NombreContainer);
