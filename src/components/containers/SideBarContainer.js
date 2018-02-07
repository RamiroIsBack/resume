import React, {Component} from 'react';
import {Sidebar_css} from '../../css';
import {connect} from 'react-redux';
import actions from '../../actions';
import {PopularFunctions} from '../../utils';

class SideBarContainer extends Component {

  handleSectionSelection(event){
    let section = event.target.id;
    this.props.movetoSection(section);
    const element = document.getElementById(section+'Container');
    element.scrollIntoView({block: 'start',  behaviour: 'smooth'});
  }

  render() {
    let styleSummary ={};
    let styleServices ={};
    let styleSTimeLine ={};//summaryContainer servicesContainer timeLineContainer
    if(this.props.section.scrollIndicator ==='summaryContainer'){
      styleSummary= {
        borderBottom: '2px solid rgb(81, 192, 242)',

      };
    }else if(this.props.section.scrollIndicator ==='servicesContainer'){
      styleServices= {
        borderBottom: '2px solid rgb(81, 192, 242)',
      };
    }else if(this.props.section.scrollIndicator ==='timeLineContainer'){
      styleSTimeLine= {
        borderBottom: '2px solid rgb(81, 192, 242)',
      };
    }

    let visual = PopularFunctions.figureOutOpacity(this.props);
    return (
      <div style= {visual}>
        <h4 className = 'sidebar__section__link '
          id = 'summary'
          style = {styleSummary}
          onClick = {this.handleSectionSelection.bind(this)}
        >Professional profile</h4>
        <h4 className = 'sidebar__section__link'
          id = 'services'
          style = {styleServices}
          onClick = {this.handleSectionSelection.bind(this)}
        >Skills and services</h4>

        <h4 className = 'sidebar__section__link'
          id = 'timeLine'
          style = {styleSTimeLine}
          onClick = {this.handleSectionSelection.bind(this)}
        >Time line resume</h4>

        <h4 className = 'sidebar__section__link'
          id = 'footer'
          onClick = {this.handleSectionSelection.bind(this)}
        >Contact</h4>


      </div>
    );
  }
}

const dispatchToProps = (dispatch) =>{

  return{
    getCopy: () => dispatch(actions.getCopy()),
    movetoSection: (section) => dispatch(actions.movetoSection(section)),

  };
};
const stateToProps = (state) => {
  return{
    copy :state.copy,
    section:state.section,
  };
};

export default connect (stateToProps,dispatchToProps)(SideBarContainer);
