import React, {Component} from 'react';
import {Containers_css} from '../../css';
import {connect} from 'react-redux';
import actions from '../../actions'

class SkillsContainer extends Component {


  render() {


    return (
      <div >
        
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
  };
};

export default connect (stateToProps,dispatchToProps)(SkillsContainer);
