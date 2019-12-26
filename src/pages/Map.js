import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LeftSide from '../components/map/LeftSide';
import location from '../img/dark-pin.svg';

const AnyReactComponent = ({ text, value }) => (
  <div>{value === true ? <h5 className="markern">asset1</h5> : ''}</div>
);

const Map = () => {
  const [center, setCenter] = useState({
    lat: -25.2743988,
    lng: 133.7751312
  });

  const [data, setData] = useState([
    { lat: '-25.224670', lng: '152.114333', name: 'asset1' },
    { lat: '-28.107516', lng: '152.982235', name: 'asset2' }
  ]);

  const [value, setValue] = useState(false);
  const [valuess, setValuess] = useState(false);
  const handelChange = values => {
    setValue(values);
  };
  const handelChanges = valuesss => {
    setValue(valuesss);
  };
  console.log('value', value);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 p-0 gray-bg">
          <LeftSide handelChange={handelChange} handelChanges={handelChanges} />
        </div>
        <div className="col-md-10 p-0">
          <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
            <GoogleMapReact defaultCenter={center} defaultZoom={5}>
              <AnyReactComponent
                lat={data[0].lat}
                lng={data[0].lng}
                text={data[0].name}
                value={value}
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
