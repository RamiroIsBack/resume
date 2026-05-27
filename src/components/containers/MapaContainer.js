import React from 'react';
import { Mapa } from '../presentational';
import { withScriptjs } from 'react-google-maps';

function MapaContainer({ mapInfo }) {
  return (
    <div>
      <Mapa
        mapInfo={mapInfo || {}}
        containerElement={<div style={{ height: '260px', maxWidth: '1200px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
}

export default withScriptjs(MapaContainer);
