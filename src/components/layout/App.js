import React, { Component } from 'react';
import {connect} from 'react-redux';
import actions from '../../actions';
import {Layout} from '../../css';
import {PopularFunctions} from '../../utils';
import {
  IntroContainer,
  SummaryContainer,

  ServicesContainer,
  TimeLineContainer,

  SideBarContainer,

  NombreContainer,
  FooterContainer,

} from '../containers';


class App extends Component {

  componentDidMount() {
    this.handleWindowSizeChange();
    window.addEventListener('resize', this.handleWindowSizeChange.bind(this));
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange.bind(this));
  }
  handleScroll(){
    var summaryEl = document.getElementById('summaryContainer');
    var servicesEl = document.getElementById('servicesContainer');
    var timeLineEl = document.getElementById('timeLineContainer');
    let windowHight = window.innerHeight;
    let scrollTopPosition = document.body.scrollTop;
    this.checkElementIntoView(windowHight,summaryEl,scrollTopPosition);
    this.checkElementIntoView(windowHight,servicesEl,scrollTopPosition);
    this.checkElementIntoView(windowHight,timeLineEl,scrollTopPosition);

  }
  checkElementIntoView(windowHight,el,scrollTopPosition){
    let elementTop =el.offsetTop;
    let elementBottom = elementTop + el.scrollHeight;
    if(el.id ==='summaryContainer' ){
      if(scrollTopPosition < elementTop - (windowHight/16) ){
        if(this.props.section.scrollIndicator !== 'entry'){
          this.props.changeScrollIndicator('entry');
        }
        return;
      }
    }
    if(scrollTopPosition > elementTop - (windowHight/3) &&
      scrollTopPosition < elementBottom - (windowHight/3)) {
      if(this.props.section.scrollIndicator !== el.id){
        this.props.changeScrollIndicator(el.id);
      }
    }
  }
  handleWindowSizeChange(){
    if(window.innerWidth > 810 && this.props.section.screenSize !== 'laptop'){
      this.props.chageScreenWidth('laptop');
    }
    if(window.innerWidth < 810 && window.innerWidth > 705  && this.props.section.screenSize !== 'tablet'){
      this.props.chageScreenWidth('tablet');
    }
    if(window.innerWidth< 705  && this.props.section.screenSize !== 'mobile' ){
      this.props.chageScreenWidth('mobile');
    }
  }

  render() {
    let mobile = false;
    if (this.props.section.screenSize ==='mobile'){
      mobile = true;
    }

    return (
      <div>

        <NombreContainer />


        <div className='container'>
          <div className='IntroContainer'>
            <IntroContainer  />

          </div>

          <div className='SummaryContainer' id='summaryContainer'>
            {this.props.section.imgLoaded &&
              <div className = 'section__headline'>
                Professional Profile
              </div>
            }
            <SummaryContainer  />

          </div>

          <div className='ServicesContainer' id='servicesContainer'>
            {this.props.section.imgLoaded &&
              <div className = 'section__headline'>
                Skills and services
              </div>
            }
            <ServicesContainer  />

          </div>


          <div className='TimeLineContainer' id='timeLineContainer'>
            {this.props.section.imgLoaded &&
              <div className = 'section__headline'>
                Time-line resume
                <div className = 'section__secondLiner__container'>
                  <div className = 'section__secondLiner__work'>
                    Work
                  </div>
                  <div className = 'section__secondLiner__studies'>
                    Studies
                  </div>
                </div>
              </div>
            }
            <TimeLineContainer  />

          </div>
          {mobile &&
            <div className='sidebarColapsable__contaniner'>
              <SideBarContainer  />

            </div>
          }
          {!mobile &&
          <div className='SideBarSpace'>

            <div className='sidebar__contaniner'>
              <SideBarContainer  />

            </div>
          </div>
          }
          <div className='FooterContainer' id='footerContainer'>

            <FooterContainer  />

          </div>

        </div>

      </div>
    );
  }
}

const dispatchToProps = (dispatch) =>{

  return{
    chageScreenWidth: (device) => dispatch(actions.chageScreenWidth(device)),
    changeScrollIndicator:(whereAmI) => dispatch(actions.changeScrollIndicator(whereAmI)),
  };
};
const stateToProps = (state) => {
  return{
    copy :state.copy,
    section: state.section,
  };
};

export default connect (stateToProps,dispatchToProps)(App);
