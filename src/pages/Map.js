import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

import location from '../img/dark-pin.svg';

const Marker = ({ text }) => (
  <div>
    <img src={location} alt="marker" />
  </div>
);

const Map = () => {
  const [center, setCenter] = useState({
    lat: 59.95,
    lng: 30.33
  });
  const [zoom, setZoom] = useState(11);
  return (
        <div className="col-sm-5 pl-0">
      <section className="map-box">
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: '6LfA7MkUAAAAAB5lWa-0jCUJTyJ4Ssr4iW6wNik4'
            }}
            defaultCenter={center}
            defaultZoom={zoom}
          >
            <Marker lat={59.955413} lng={30.337844} text="My Marker" />
          </GoogleMapReact>
          {/* <div className="search-field">
            <Button className="btn search-button">primary</Button>{' '}
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Map;
