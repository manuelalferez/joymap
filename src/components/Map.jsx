import React from 'react';
import { GoogleMap } from 'react-google-maps';
import withGoogleMap from 'react-google-maps/lib/withGoogleMap';
import withScriptjs from 'react-google-maps/lib/withScriptjs';

function Map() {
  return (
    <div>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 37.9443, lng: -4.2141 }}
      />
    </div>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
