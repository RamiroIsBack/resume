
import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../../actions';
import {PopularFunctions} from '../../utils';
import {TimeBox} from '../presentational';
import {TimeLineYears_css, TimeLineActivities_css} from '../../css'; // eslint-disable-line no-unused-vars

class TimeLineContainer extends Component {
  getTimeLineComponents(rawList){
    let timeLineComponentList = [];
    for(let i = 0; i<rawList.length; i++){
      timeLineComponentList.push(
        <div className = {rawList[i].className} key ={i}>
          <TimeBox
            urlClick = {this.handleClick.bind(this)}
            copy = {rawList[i]}
            screenSize = {this.props.section.screenSize}
          />
        </div>
      );
    }
    return timeLineComponentList;
  }

  handleClick(url){
    if(url !=='falta'){
      window.open(url,'_blank');
    }
  }
  render() {
    let timeLineList = [];
    if(this.props.copy){
      if (this.props.copy.timeLineList.length !== 0){
        timeLineList = this.getTimeLineComponents(this.props.copy.timeLineList);
      }
    }
    
    return (
      <div className = 'timeLine__container'>
        {timeLineList}
        <div className = 'line'>
        </div>
        <div className = 'year__container'>
          <div className = 'eighteen'>2018</div>
          <div className = 'seventeen'>2017</div>
          <div className = 'sixteen'>2016</div>
          <div className = 'fiveteen'>2015</div>
          <div className = 'twelve'>2012</div>
          <div className = 'ten'>2010</div>
          <div className = 'eight'>2008</div>
          <div className = 'five'>2005</div>
          <div className = 'zero'>2000</div>
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
