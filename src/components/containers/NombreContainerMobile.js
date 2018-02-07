import React, {Component} from 'react';
import {Nombre_mobile_css} from '../../css';
import {connect} from 'react-redux';
import actions from '../../actions'
import {PopularFunctions} from '../../utils';

class NombreContainerMobile extends Component {


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
      <div className = 'nombre__contaniner__mobile' style = {visual}>
        <h5 className = 'saludo__mobile'>Hi! I'm</h5>
        <h5 className = 'nombre__mobile'>Ramiro Santamaria</h5>
        <h5 className = 'puesto__mobile' style={animeIt} >Web App Developer</h5>
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

export default connect (stateToProps,dispatchToProps)(NombreContainerMobile);
