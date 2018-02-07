import React, { Component } from 'react';
import {connect} from 'react-redux';
import actions from '../../actions';
import {Layout, LayoutMobile} from '../../css';
import {PopularFunctions} from '../../utils';
import {
  IntroContainer,
  SummaryContainer,
  SummaryContainerMobile,
  ServicesContainer,
  TimeLineContainer,
  TimeLineContainerMobile,
  SideBarContainer,
  SideBarContainerMobile,
  NombreContainer,
  NombreContainerMobile,
  FooterContainer,
  FooterContainerMobile,
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
    if(scrollTopPosition > elementTop - (windowHight/3) &&
      scrollTopPosition < elementBottom - (windowHight/3)) {
      if(this.props.section.scrollIndicator !== el.id){
        this.props.changeScrollIndicator(el.id);
      }
    }
  }
  handleWindowSizeChange(){
    if(window.innerWidth > 1240 && this.props.section.screenSize !== 'laptop'){
      this.props.chageScreenWidth('laptop');
    }
    if(window.innerWidth < 1240 && window.innerWidth > 920 && this.props.section.screenSize !== 'prelaptop'){
      this.props.chageScreenWidth('prelaptop');
    }
    if(window.innerWidth < 920 && window.innerWidth > 820  && this.props.section.screenSize !== 'tablet'){
      this.props.chageScreenWidth('tablet');
    }
    if(window.innerWidth< 820  && this.props.section.screenSize !== 'mobile' ){
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
        {mobile &&
          <NombreContainerMobile />
        }
        {!mobile &&
          <NombreContainer />
        }
        {mobile &&
          <div className='container__mobile'>
            <div className='IntroContainer__mobile'>
              <IntroContainer  />

            </div>


            <div className='SummaryContainer__mobile' id='summaryContainer'>
              <div className='sidebarColapsable__contaniner__mobile'>
                <SideBarContainerMobile  />

              </div>
              {this.props.section.imgLoaded &&
                <div className = 'section__headline__mobile'>
                  Professional Profile
                </div>
              }
              <SummaryContainerMobile  />

            </div>


            <div className='ServicesContainer__mobile' id='servicesContainer'>
              {this.props.section.imgLoaded &&
                <div className = 'section__headline__mobile'>
                  Skills and services
                </div>
              }
              <ServicesContainer  />

            </div>


            <div className='TimeLineContainer__mobile' id='timeLineContainer'>
              {this.props.section.imgLoaded &&
                <div className = 'section__headline__mobile'>
                  Time-line resume
                  <div>
                    <div className = 'section__secondLiner__work__mobile'>
                      Work
                    </div>
                    <div className = 'section__secondLiner__studies__mobile'>
                      Studies
                    </div>
                  </div>
                </div>
              }
              <TimeLineContainerMobile  />

            </div>
            <div className='FooterContainer__mobile' id='footerContainer'>

              <FooterContainer  />

            </div>



          </div>
        }
        {!mobile &&
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
                  <div>
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

            <div className='SideBarSpace'>

              <div className='sidebar__contaniner'>
                <SideBarContainer  />

              </div>
            </div>
            <div className='FooterContainer' id='footerContainer'>

              <FooterContainer  />

            </div>

          </div>
        }
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
