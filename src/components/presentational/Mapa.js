import React from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import LazyLoad from 'react-lazy-load';
import { useUI } from '../../context/UIContext';
import { ui } from '../../i18n/ui';

const MAPS_URL = 'https://www.google.com/maps/place/Alcal%C3%A1+de+Henares,+Madrid/@40.4817,-3.3763,13z';
const MAP_STYLES = [
  { featureType: 'landscape.natural', elementType: 'geometry.fill', stylers: [{ visibility: 'on' }, { color: '#e0efef' }] },
  { featureType: 'poi', elementType: 'geometry.fill', stylers: [{ visibility: 'on' }, { hue: '#1900ff' }, { color: '#c0e8e8' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ lightness: 100 }, { visibility: 'simplified' }] },
  { featureType: 'road', elementType: 'labels', stylers: [{ visibility: 'off' }] },
  { featureType: 'transit.line', elementType: 'geometry', stylers: [{ visibility: 'on' }, { lightness: 700 }] },
  { featureType: 'water', elementType: 'all', stylers: [{ color: '#0199b5' }] },
];

function Mapa({ mapInfo }) {
  const { lang } = useUI();
  const t = ui[lang];
  const foto = mapInfo ? mapInfo.urlPic : '';

  function handleClick(url) {
    window.open(url, '_blank');
  }

  return (
    <GoogleMap
      defaultOptions={{ styles: MAP_STYLES }}
      defaultZoom={9}
      defaultCenter={{ lat: 40.4817, lng: -3.3663 }}
    >
      <Marker
        position={{ lat: 40.4817, lng: -3.3663 }}
        onClick={() => handleClick(MAPS_URL)}
      >
        <InfoWindow>
          <div style={{ maxWidth: 600, padding: 0, margin: 0 }}>
            <LazyLoad height={60} offsetVertical={100}>
              <img
                role='presentation'
                src={foto}
                className='infoWindow__img'
                alt='foto'
                id='fotoInfoWindow'
                style={{ opacity: 0.9, maxHeight: 60, maxWidth: 60, cursor: 'pointer', marginRight: '2px' }}
                onClick={() => handleClick(MAPS_URL)}
              />
            </LazyLoad>
            <div className='infoWindow__bio' style={{ padding: 0 }}>
              <h6 style={{ marginTop: 2, marginBottom: 2 }}>{t.iAmIn}</h6>
              <h5 style={{ marginTop: 2, marginBottom: 0 }}>{t.city}</h5>
              <h6 style={{ marginTop: 2, marginBottom: 2 }}>{t.country}</h6>
            </div>
          </div>
        </InfoWindow>
      </Marker>
    </GoogleMap>
  );
}

export default withGoogleMap(Mapa);
