import React, {Component} from 'react';
import {Nombre_css} from '../../css';
import {connect} from 'react-redux';
import actions from '../../actions'
import {PopularFunctions} from '../../utils';

class NombreContainer extends Component {


  render() {
    let visual = PopularFunctions.figureOutOpacity(this.props);
    let animeIt = {};
    if(this.props.section){
      if(this.props.section.imgLoaded){
        animeIt = {
          animation: 'typing 3.5s steps(40, end),blink-caret .75s step-end infinite'
        };
      }
    }

    return (
      <div className = 'nombre__contaniner' style = {visual}>
        <h3 className = 'saludo'>Hi! I'm</h3>
        <h3 className = 'nombre'>Ramiro Santamaria</h3>
        <h3 className = 'puesto' style={animeIt} >Web App Developer</h3>
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
