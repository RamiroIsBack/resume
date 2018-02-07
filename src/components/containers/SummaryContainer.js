import React, {Component} from 'react';
import {Summary_css} from '../../css';
import {connect} from 'react-redux';
import actions from '../../actions';
import {PopularFunctions} from '../../utils';

class SummaryContainer extends Component {

  handleClick(){

    this.props.movetoSection('footer');
    const element = document.getElementById('footerContainer');
    element.scrollIntoView({block: 'start',  behaviour: 'smooth'});
  }

  render() {
    let urlPic = '';
    let bio = '';

    let intros = <div><br/><br/></div>;
    let bioCss = 'bio';
    let headLineCss = 'head__line';

    let copy = PopularFunctions.selectSpecificCopy(this.props,'summaryPic');
    let visual = PopularFunctions.figureOutOpacity(this.props);
    if (copy.bio){
      urlPic = copy.urlPic;
      bio = copy.bio;
    }
    if(this.props.section.screenSize === 'tablet'){
      intros = <div style = {{margin:0,padding:5}}></div>;
      bioCss = 'bio__tablet';
      headLineCss = 'head__line__tablet';
    }
    if(this.props.section.screenSize === 'prelaptop'){
      intros = <div><br/></div>;
      bioCss = 'bio__prelaptop';
      headLineCss = 'head__line__tablet';

    }
    return (
      <div className = 'summary__container' style = {visual}>
        <div className = 'summary__photo__container' >
          <h2 className = 'contact__button'
            onClick = {this.handleClick.bind(this)}
          >
            Contact info
          </h2>
          <div className = 'summary__copy'>
            <h2 className = {headLineCss}>
              About me:
            </h2>
            <div className = 'bio__container'>
              {bio.split('\n').map((item, key) => {
                return <span className = {bioCss} key={key}>{item}{intros}</span>;})}
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
    movetoSection: (section) => dispatch(actions.movetoSection(section)),

  };
};
const stateToProps = (state) => {
  return{
    copy :state.copy,
    section: state.section,
  };
};

export default connect (stateToProps,dispatchToProps)(SummaryContainer);
