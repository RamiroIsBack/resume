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
    if (this.props.section.screenSize ==='mobile'){
      this.props.toggleMenu(!this.props.section.colapsed);
    }
  }
  toggleMenu(){

    this.props.toggleMenu(!this.props.section.colapsed);

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
    let copy = PopularFunctions.selectSpecificCopy(this.props,'sideBar');

    let colapsed = true;
    let imgSideBarColapsed = '';
    imgSideBarColapsed = copy.urlPic;
    let arrowClose = copy.urlArrowClose;
    let arrowOpen = copy.urlArrowOpen;
    if(!this.props.section.colapsed){
      colapsed = false;
    }
    let mobile = false;
    if (this.props.section.screenSize ==='mobile'){
      // if(this.props.section.scrollIndicator === 'entry'){
      //   visual ={opacity:0};
      // }
      mobile = true;
    }
    return (
      <div>
        {!mobile &&
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
        }
        {mobile &&
          <div style= {visual}>
            { !colapsed &&
              <div className = 'sidebar__menu__container__mobile'>
                <div className = 'sidebar__menu__arrow__colapse__container'>
                  <img
                    className = 'sidebar__menu__arrow__colapse'
                    src = {arrowClose}
                    onClick = {this.toggleMenu.bind(this)}
                  ></img>
                </div>
                <h4 className = 'sidebar__section__link '
                  id = 'summary'
                  style = {styleSummary}
                  onClick = {this.handleSectionSelection.bind(this)}
                >Profile</h4>
                <h4 className = 'sidebar__section__link'
                  id = 'services'
                  style = {styleServices}
                  onClick = {this.handleSectionSelection.bind(this)}
                >Skills</h4>

                <h4 className = 'sidebar__section__link'
                  id = 'timeLine'
                  style = {styleSTimeLine}
                  onClick = {this.handleSectionSelection.bind(this)}
                >Resume</h4>

                <h4 className = 'sidebar__section__link'
                  id = 'footer'
                  onClick = {this.handleSectionSelection.bind(this)}
                >Contact</h4>
              </div>
            }
            {colapsed &&
              <div className = 'sidebar__colapsed__photo__container__mobile'>
                <img
                  className = 'sidebar__colapsed__photo__mobile'
                  src= {arrowOpen}
                  onClick = {this.toggleMenu.bind(this)}
                ></img>
              </div>
            }
          </div>
        }
      </div>
    );
  }
}

const dispatchToProps = (dispatch) =>{

  return{
    toggleMenu:(order)=> dispatch(actions.toggleMenu(order)),
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
