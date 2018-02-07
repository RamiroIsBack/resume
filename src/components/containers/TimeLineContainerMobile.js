
import React, {Component} from 'react';
import {TimeLineYears_mobile_css,TimeLineActivities_mobile_css} from '../../css';
import {connect} from 'react-redux';
import actions from '../../actions';
import {PopularFunctions} from '../../utils';
import {TimeBoxMobile} from '../presentational';

class TimeLineContainerMobile extends Component {
  getTimeLineComponents(rawList){
    let timeLineComponentList = [];
    for(let i = 0; i<rawList.length; i++){
      timeLineComponentList.push(
        <div className = {rawList[i].className+'__mobile'} key ={i}>
          <TimeBoxMobile
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
    if(url !='falta'){
      window.open(url,'_blank');
    }
  }
  render() {
    let timeLineList = [];
    if(this.props.copy){
      if (this.props.copy.timeLineList.length != 0){
        timeLineList = this.getTimeLineComponents(this.props.copy.timeLineList);
      }
    }
    let visual = PopularFunctions.figureOutOpacity(this.props);

    return (
      <div className = 'timeLine__container__mobile' style = {visual} >
        {timeLineList}
        <div className = 'line__mobile'>
        </div>
        <div className = 'year__container__mobile'>
          <div className = 'eighteen__mobile'>2018</div>
          <div className = 'seventeen__mobile'>2017</div>
          <div className = 'sixteen__mobile'>2016</div>
          <div className = 'fiveteen__mobile'>2015</div>
          <div className = 'twelve__mobile'>2012</div>
          <div className = 'ten__mobile'>2010</div>
          <div className = 'eight__mobile'>2008</div>
          <div className = 'five__mobile'>2005</div>
          <div className = 'zero__mobile'>2000</div>
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

export default connect (stateToProps,dispatchToProps)(TimeLineContainerMobile);
