import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker,  InfoWindow, } from 'react-google-maps'
import LazyLoad from 'react-lazy-load';

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
          <div style = {{maxWidth: 600,padding : 0, margin: 0}}>
            <LazyLoad height={60} offsetVertical={100}>
              <img role='presentation' src={foto} className ='infoWindow__img' alt='foto' id='fotoInfoWindow'
                style = {{
                  opacity: 0.9, maxHeight: 60, maxWidth:60, cursor: 'pointer', marginRight:'2px',
                }}
                onClick={() => this.handleClick('https://www.google.com/maps/place/Hampden,+Baltimore,+Maryland+21211/@39.3399061,-76.6020314,12.93z/data=!4m5!3m4!1s0x89c804d5f7905ff3:0x5cc1e5ec25566796!8m2!3d39.3333706!4d-76.632607')}>
              </img>
            </LazyLoad >

            <div className='infoWindow__bio' style = {{padding : 0,}} >
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
        defaultOptions ={{
          styles:
          [
            {
              'featureType': 'landscape.natural',
              'elementType': 'geometry.fill',
              'stylers': [
                {
                  'visibility': 'on'
                },
                {
                  'color': '#e0efef'
                }
              ]
            },
            {
              'featureType': 'poi',
              'elementType': 'geometry.fill',
              'stylers': [
                {
                  'visibility': 'on'
                },
                {
                  'hue': '#1900ff'
                },
                {
                  'color': '#c0e8e8'
                }
              ]
            },
            {
              'featureType': 'road',
              'elementType': 'geometry',
              'stylers': [
                {
                  'lightness': 100
                },
                {
                  'visibility': 'simplified'
                }
              ]
            },
            {
              'featureType': 'road',
              'elementType': 'labels',
              'stylers': [
                {
                  'visibility': 'off'
                }
              ]
            },
            {
              'featureType': 'transit.line',
              'elementType': 'geometry',
              'stylers': [
                {
                  'visibility': 'on'
                },
                {
                  'lightness': 700
                }
              ]
            },
            {
              'featureType': 'water',
              'elementType': 'all',
              'stylers': [
                {
                  'color': '#0199b5'
                }
              ]
            }
          ]
        }}
        defaultZoom={9}
        defaultCenter={{  lat: 39.5332391, lng: -76.610066  }}
      >
        {marker}
      </GoogleMap>
    )
  }
}

export default withGoogleMap(Mapa)
