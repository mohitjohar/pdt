import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LeftSide from '../components/map/LeftSide';
import location from '../img/dark-pin.svg';

const AnyReactComponent = ({ text, value, data }) => (
  <div>
    <div>{data === true ? <h5 className="markern">{text}</h5> : ''}</div>
    <div>{value === true ? <h5 className="markern">{text}</h5> : ''}</div>
  </div>
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
  const [name, setName] = useState(false);
  const handelChange = values => {
    setValue(values);
  };
  const handelChanges = (e) => {
    setName(e);
  };
  console.log('valuessss', name);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 p-0 gray-bg">
          <LeftSide handelChange={handelChange} handelChanges={handelChanges} />
        </div>
        <div className="col-md-10 p-0">
          <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
            <GoogleMapReact defaultCenter={center} defaultZoom={5}>
              {value &&
                <AnyReactComponent
                  lat={data[0].lat}
                  lng={data[0].lng}
                  text={data[0].name}
                  value={value}
                />
              }
              {name &&
                <AnyReactComponent
                  lat={data[1].lat}
                  lng={data[1].lng}
                  text={data[1].name}
                  data={name}
                />
              }

            </GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
