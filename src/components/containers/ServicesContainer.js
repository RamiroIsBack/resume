import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../../actions';
import {Service} from '../presentational';
import {PopularFunctions} from '../../utils';
import {Services_css} from '../../css'; // eslint-disable-line no-unused-vars

class ServicesContainer extends Component {
  constructor(){
    super();
    this.state = {
      animatedAlready : false,
    };
  }
  getServicesComponents(rawList){
    let servicesComponentList = [];
    let animeIt =false;
    if(this.props.section.scrollIndicator === 'servicesContainer' ){
      animeIt =true;
    }

    for(let i = 0; i<rawList.length; i++){
      servicesComponentList.push(
        <div key ={i}>
          <Service
            sectionSelected= {animeIt}
            serviceInfo ={rawList[i]}
          />
        </div>
      );
    }
    return servicesComponentList;
  }

  render() {
    let servicesList = [];
    if(this.props.copy){
      if (this.props.copy.servicesList.length !== 0){
        servicesList = this.getServicesComponents(this.props.copy.servicesList);
      }
    }

    let visual = PopularFunctions.figureOutOpacity(this.props);
    return (
      <div className = 'services__container' style= {visual}>
        {servicesList}
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

export default connect (stateToProps,dispatchToProps)(ServicesContainer);
