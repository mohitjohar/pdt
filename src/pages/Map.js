import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import carsIcon from '../img/cars.png';
import azIcon from '../img/AZ.png';
import Header from '../components/map/Header';

const AnyReactComponent1 = () => (
  <div>
    <h5 className="markern">Asset1</h5>
  </div>
);
const AnyReactComponent2 = () => (
  <div>
    <h5 className="markern">Asset2</h5>
  </div>
);

const Map = () => {
  const [center, setCenter] = useState({
    lat: -25.2743988,
    lng: 133.7751312
  });
  const AnyReactComponent = ({ lat, lng, text, value, data, name, names }) => (
    <div>
      <h5 className="markern">{text}</h5>
    </div>
  );

  const AnyReactComponent3 = () => <h5 className="markern1">Omni-tuff QLD</h5>;

  const [data, setData] = useState([
    { lat: '-25.224670', lng: '152.114333', name: 'asset1' },
    { lat: '-28.107516', lng: '152.982235', name: 'asset2' }
  ]);
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const [value, setValue] = useState(false);
  const [name, setName] = useState(false);
  const [names, setNames] = useState(false);
  const [zoom, setZoom] = useState(5);
  const setAllChange = () => {
    setValue(!value);
    setName(!name);
    setNames(!names);
  };

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 p-0 gray-bg">
            <div className="map-left-sidebar">
              <div className="d-flex align-item-center map-fliter">
                <div className="nav-link w-100">
                  <input
                    type="text"
                    placeholder="Search"
                    className="control-search"
                  />
                  <i className="fa fa-search position-absolute" />
                </div>
                <a href="#" className="nav-link">
                  <i className="fa fa-ellipsis-v" aria-hidden="true" />
                </a>
              </div>
              <div className="d-flex align-items-center map-fliter filter1 justify-content-between">
                <div className="d-inline-flex align-items-center">
                  <a href="#" className="nav-link">
                    <input type="checkbox" className="minus" />
                  </a>
                  <a href="#" className="nav-link">
                    <input type="checkbox" />
                  </a>
                  <a href="#" className="nav-link">
                    <img src={azIcon} alt="az-icon" />
                  </a>
                </div>
                <div className="d-inline-flex align-items-center">
                  <a href="#" className="nav-link">
                    <i className="fa fa-crosshairs" />
                  </a>
                  <a href="#" className="nav-link">
                    <i className="fa fa-comment" />
                  </a>
                  <a href="#" className="nav-link">
                    <i className="fa fa-times" />
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-center map-fliter fliter2 justify-content-between">
                <div className="d-inline-flex align-items-center">
                  <a href="#" className="nav-link">
                    <input type="checkbox" className="minus" onClick={toggle} />
                  </a>
                  <a href="#" className="nav-link">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={setAllChange}
                    />
                  </a>
                  <a href="#" className="nav-link">
                    <img src={carsIcon} alt="carsIcon" />
                  </a>
                  <a href="#" className="nav-link">
                    All units
                  </a>
                </div>
                <div className="d-inline-flex align-items-center">
                  <a href="#" className="nav-link">
                    <i className="fa fa-chevron-circle-down" />
                  </a>
                  <a href="#" className="nav-link">
                    <i className="fa fa-times" />
                  </a>
                </div>
              </div>

              <Collapse isOpen={isOpen}>
                <div className="d-flex align-items-center map-fliter fliter3 justify-content-between">
                  <div className="d-inline-flex align-items-center">
                    <a href="#" className="nav-link">
                      <input
                        type="checkbox"
                        checked={name}
                        onChange={() => setName(!name)}
                      />
                    </a>
                    <a href="#" className="nav-link">
                      <i className="fa fa-square text-yellow" />
                    </a>
                    <a href="#" className="nav-link">
                      Asset 1
                    </a>
                  </div>
                  <div className="d-inline-flex align-items-center">
                    <a href="#" className="nav-link">
                      <i className="fa fa-crosshairs" />
                    </a>
                    <a href="#" className="nav-link">
                      <i className="fa fa-chevron-circle-down" />
                    </a>
                    <a href="#" className="nav-link">
                      <i className="fa fa-times" />
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-center map-fliter fliter3 justify-content-between">
                  <div className="d-inline-flex align-items-center">
                    <a href="#" className="nav-link">
                      <input
                        type="checkbox"
                        checked={names}
                        onChange={() => setNames(!names)}
                      />
                    </a>
                    <a href="#" className="nav-link">
                      <i className="fa fa-square text-yellow" />
                    </a>
                    <a href="#" className="nav-link">
                      Asset 2
                    </a>
                  </div>
                  <div className="d-inline-flex align-items-center">
                    <a href="#" className="nav-link">
                      <i className="fa fa-crosshairs" />
                    </a>
                    <a href="#" className="nav-link">
                      <i className="fa fa-chevron-circle-down" />
                    </a>
                    <a href="#" className="nav-link">
                      <i className="fa fa-times" />
                    </a>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
          <div className="col-md-10 p-0">
            <div
              style={{ height: '100vh', width: '100%', position: 'relative' }}
            >
              <GoogleMapReact
                options={function(maps) {
                  return { mapTypeId: 'hybrid' };
                }}
                center={center}
                zoom={zoom}
                bootstrapURLKeys={{
                  key: 'AIzaSyB2RgWanHLf385ziPuRTY2d19hZAWVHbYs'
                }}
              >
                {name && (
                  <AnyReactComponent1 lat={-25.22467} lng={152.114333} />
                )}
                {names && (
                  <AnyReactComponent2 lat={-28.107516} lng={152.982235} />
                )}
                {value &&
                  data.map(item => (
                    <AnyReactComponent
                      lat={item.lat}
                      lng={item.lng}
                      text={item.name}
                    />
                  ))}
                <AnyReactComponent3 lat={-25.22467} lng={152.114333} />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
