import React from 'react';
import Map from './components/Map';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          import.meta.env.VITE_API_KEY
        }`}
        loadingElement={<div style={{ height: `100vh` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
