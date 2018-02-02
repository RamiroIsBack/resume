import React, {Component} from 'react';
import {Sidebar_css} from '../../css';
import {connect} from 'react-redux';
import actions from '../../actions';
import {PopularFunctions} from '../../utils';

class SideBarContainer extends Component {

  handleSectionSelection(event){
    let section = event.target.id;
    this.props.movetoSection(section);
  }

  render() {

    let visual = PopularFunctions.figureOutOpacity(this.props);
    return (
      <div style= {visual}>
        <h4 className = 'sidebar__section__link '
          id = 'summary'
          onClick = {this.handleSectionSelection.bind(this)}
        >Summary</h4>
        <h4 className = 'sidebar__section__link'
          id = 'services'
          onClick = {this.handleSectionSelection.bind(this)}
        >Services</h4>

        <h4 className = 'sidebar__section__link'
          id = 'timeLine'
          onClick = {this.handleSectionSelection.bind(this)}
        >TimeLine</h4>

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
