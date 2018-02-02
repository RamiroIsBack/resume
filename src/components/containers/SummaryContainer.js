import React, {Component} from 'react';
import {Summary_css} from '../../css';
import {connect} from 'react-redux';
import actions from '../../actions';
import {PopularFunctions} from '../../utils';

class SummaryContainer extends Component {


  render() {
    let urlPic = '';
    let bio = '';
    if(this.props.copy){
      if (this.props.copy.copyList.length != 0){
        for(let i = 0; i<this.props.copy.copyList.length; i++){
          if(this.props.copy.copyList[i].nombre === 'summaryPic'){
            urlPic = this.props.copy.copyList[i].urlPic;
            bio = this.props.copy.copyList[i].bio;
            break;
          }
        }
      }
    }

    let visual = PopularFunctions.figureOutOpacity(this.props);

    return (
      <div className = 'summary__container' style = {visual}>
        <div className = 'summary__photo__container' >

          <div className = 'summary__copy'>
            <h2>
              About me:
            </h2>
            <div className = 'bio__container'>
              {bio.split('\n').map((item, key) => {
                return <span className = 'bio' key={key}>{item}<br/><br/></span>;})}
            </div>
          </div>
          <img className = 'summary__photo' src = {urlPic}></img>
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
    section: state.section,
  };
};

export default connect (stateToProps,dispatchToProps)(SummaryContainer);
