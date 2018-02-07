import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import {Mapa} from '../presentational';
import { withScriptjs, withGoogleMap, GoogleMap, Marker,  InfoWindow, } from 'react-google-maps';
class MapaContainer extends Component {

  render() {
    let mapInfo ={};
    if(this.props.mapInfo){
      mapInfo = this.props.mapInfo;
    }
    return (
      <div>

        <Mapa
          mapInfo = {mapInfo}
          containerElement={<div style={{ height: '260px', maxWidth:'1200px'}} />}
          mapElement={<div style={{ height: '100%' }} />}
        />

      </div>
    );
  }
}
const dispatchToProps = (dispatch) =>{

  return{


  };
};

const stateToProps = (state) => {
  return{
    section:state.section,
    copy:state.copy,
  };
};

export default connect (stateToProps,dispatchToProps)(withScriptjs(MapaContainer))
