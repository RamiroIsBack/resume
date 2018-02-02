
import React, {Component} from 'react';
import {Time} from '../../css';
import {connect} from 'react-redux';
import actions from '../../actions';
import {PopularFunctions} from '../../utils';

class TimeLineContainer extends Component {


  render() {
    let visual = PopularFunctions.figureOutOpacity(this.props);
    return (
      <div className = 'timeLine__container' style = {visual} >
        <div className = 'studies__degree'>
          studies__degree
        </div>
        <div className = 'studies__civil__servant'>
          studies__civil__servantxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            studies__civil__servantxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  studies__civil__servantxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </div>
        <div className = 'studies__android'>
          studies__android
        </div>
        <div className = 'studies__vertical'>
          studies__vertical
        </div>
        <div className = 'studies__react'>
          studies__react
        </div>
        <div className = 'work__programmingC'>
          work__programmingC
        </div>
        <div className = 'work__java'>
          work__java
        </div>
        <div className = 'work__english__teacher'>
          work__english__teacher
        </div>
        <div className = 'work__android'>
          work__android
        </div>
        <div className = 'work__rope__acces__technician'>
          work__rope__acces__technician
        </div>
        <div className = 'work__web__app'>
          work__web__app
        </div>
        <div className = 'line'>
        </div>
        <div className = 'year__container'>
          <div className = 'eighteen'>
            2018
          </div>
          <div className = 'seventeen'>
            2017
          </div>
          <div className = 'sixteen'>
            2016
          </div>
          <div className = 'fiveteen'>
            2015
          </div>
          <div className = 'twelve'>
            2012
          </div>
          <div className = 'ten'>
            2010
          </div>
          <div className = 'eight'>
            2008
          </div>
          <div className = 'five'>
            2005
          </div>
          <div className = 'zero'>
            2000
          </div>
        </div>

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
    section:state.section,
  };
};

export default connect (stateToProps,dispatchToProps)(TimeLineContainer);
