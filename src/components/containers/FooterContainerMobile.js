import React, {Component} from 'react';
import {Footer_css} from '../../css';
import {connect} from 'react-redux';
import actions from '../../actions';
import {PopularFunctions} from '../../utils';

class FooterContainerMobile extends Component {


  render() {
    let urlPic ='';

    let copy = PopularFunctions.selectSpecificCopy(this.props,'footer');
    let visual = PopularFunctions.figureOutOpacity(this.props);

    return (
      <div className='footer__container' style = {visual}>

      </div>
    );
  }
}

const dispatchToProps = (dispatch) =>{

  return{
    getCopy: () => dispatch(actions.getCopy()),
    imgLoaded: (loaded) => dispatch (actions.imgLoaded(loaded)),

  };
};
const stateToProps = (state) => {
  return{
    copy :state.copy,
    section: state.section,
  };
};

export default connect (stateToProps,dispatchToProps)(FooterContainerMobile);
