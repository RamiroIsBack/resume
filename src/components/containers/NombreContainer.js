import React, {Component} from 'react';
import {Nombre_css} from '../../css';
import {connect} from 'react-redux';
import actions from '../../actions'
import {PopularFunctions} from '../../utils';

class NombreContainer extends Component {


  render() {


    return (
      <div className = 'nombre__contaniner'>
        <h3 className = 'saludo'>Hi! I'm</h3>
        <h3 className = 'nombre'>Ramiro Santamaria</h3>
        <h3 className = 'puesto' >Web App Developer</h3>
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
