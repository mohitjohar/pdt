import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LeftSide from '../components/map/LeftSide'
import location from '../img/dark-pin.svg';
const AnyReactComponent = ({ text }) => <h1>mohit</h1>;
// const Marker = ({ text }) => (
//   <div>
//     <img src={location} alt="marker" />
//   </div>
// );

const Map = () => {
  const [center, setCenter] = useState({
    lat: -25.2743988,
    lng: 133.7751312
  });
  const [zoom, setZoom] = useState(11);
  return (
      <div className="row">
          <div className="col-md-4">
            <LeftSide/>
          </div>
        <div className="col-md-8">
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            defaultCenter={center}
            defaultZoom={4}
          >
               <AnyReactComponent
            lat={-28.107516}
            lng={152.982235}
            text="My Marker"
          />
            {/* <Marker lat={59.955413} lng={30.337844} text="My Marker" /> */}
          </GoogleMapReact>
          {/* <div className="search-field">
            <Button className="btn search-button">primary</Button>{' '}
          </div> */}
        </div>
    </div>
    </div>
  );
};

export default Map;
