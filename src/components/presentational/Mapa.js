import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker,  InfoWindow, } from 'react-google-maps'

class Mapa extends Component {
  constructor(){
    super();
    this.state={
      mapa: null
    };
  }

  makeMarker(){
    let foto ='';
    let marker = {};
    if(this.props.mapInfo){
      foto = this.props.mapInfo.urlPic;
    }
    marker =(
      <Marker
        position={{
          lat: 39.3311347
          ,
          lng: -76.6450283
        }}
        onClick={() => this.handleClick('https://www.google.com/maps/place/Hampden,+Baltimore,+Maryland+21211/@39.3399061,-76.6020314,12.93z/data=!4m5!3m4!1s0x89c804d5f7905ff3:0x5cc1e5ec25566796!8m2!3d39.3333706!4d-76.632607')}
      >

        <InfoWindow >
          <div style = {{maxWidth: 600,padding : 0}}>

            <img role='presentation' src={foto} className ='infoWindow__img' alt='foto' id='fotoInfoWindow'
              style = {{
                opacity: 0.9, maxHeight: 60, maxWidth:60, cursor: 'pointer',float:'left', marginRight:'2px',
              }}
              onClick={() => this.handleClick('https://www.google.com/maps/place/Hampden,+Baltimore,+Maryland+21211/@39.3399061,-76.6020314,12.93z/data=!4m5!3m4!1s0x89c804d5f7905ff3:0x5cc1e5ec25566796!8m2!3d39.3333706!4d-76.632607')}>
            </img>

            <div className='infoWindow__bio' style = {{padding : 0,float:'right'}} >
              <h6 style = {{marginTop : 2,marginBottom:2}}>I'm in</h6>
              <h5 style = {{marginTop : 2,marginBottom:0}}>Hampden</h5>
              <h6 style = {{marginTop : 2,marginBottom:2}}>Baltimore, MD</h6>
            </div>

          </div>
        </InfoWindow>

      </Marker>

    );




    return marker;
  }
  handleClick(urlToGo){
    window.open(urlToGo,'_blank');
  }


  render() {

    let marker = this.makeMarker();
    return (

      <GoogleMap

        defaultZoom={9}
        defaultCenter={{  lat: 39.4832391, lng: -76.660066  }}
      >
        {marker}
      </GoogleMap>
    )
  }
}

export default withGoogleMap(Mapa)
