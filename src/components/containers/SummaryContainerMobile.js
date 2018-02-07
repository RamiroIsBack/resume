import React, {Component} from 'react';
import {SummaryMobile_css} from '../../css';
import {connect} from 'react-redux';
import actions from '../../actions';
import {PopularFunctions} from '../../utils';

class SummaryContainerMobile extends Component {

  handleClick(){

    this.props.movetoSection('footer');
    const element = document.getElementById('footerContainer');
    element.scrollIntoView({block: 'start',  behaviour: 'smooth'});
  }
  render() {
    let urlPic = '';
    let bio = '';

    let copy = PopularFunctions.selectSpecificCopy(this.props,'summaryPic');
    let visual = PopularFunctions.figureOutOpacity(this.props);
    if (copy.bio){
      urlPic = copy.urlPic;
      bio = copy.bio;
    }

    return (
      <div className = 'summary__container__mobile' style = {visual}>
        <div className = 'headLine__andPhoto__container__mobile'>
          <h2 className = 'head__line__mobile'>
            Some words about me:
          </h2>
          <h2 className = 'contact__button__mobile'
            onClick = {this.handleClick.bind(this)}
          >
            Contact info
          </h2>
          <div className = 'summary__photo__container__mobile' >
            <img className = 'summary__photo__mobile' src = {urlPic}></img>
          </div>
        </div>
        <div className = 'summary__copy__mobile'>
          <div className = 'bio__container__mobile'>
            {bio.split('\n').map((item, key) => {
              return <span className = 'bio__mobile' key={key}>{item}<br/><br/></span>;})}
          </div>
        </div>
      </div>
    );
  }
}

const dispatchToProps = (dispatch) =>{

  return{
    movetoSection: (section) => dispatch(actions.movetoSection(section)),

  };
};
const stateToProps = (state) => {
  return{
    copy :state.copy,
    section: state.section,
  };
};

export default connect (stateToProps,dispatchToProps)(SummaryContainerMobile);
