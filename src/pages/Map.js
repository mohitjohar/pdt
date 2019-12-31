import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Collapse } from 'reactstrap';
import mapmarker from '../img/map-marker.png';
import mapmarkergeen from '../img/map-marker-green.png';
import azIcon from '../img/AZ.png';
import Header from '../components/map/Header';
import engineimg from '../img/engine-icon.png';

const AnyReactComponent1 = () => (
  <div>
    <img src={mapmarker} alt="map-marker" />
  </div>
);
const AnyReactComponent2 = () => (
  <div>
    <img src={mapmarker} alt="map-marker" />
  </div>
);
const AnyReactComponent3 = () => (
  <div>
    <img src={mapmarker} alt="map-marker" />
  </div>
);
const AnyReactComponent4 = () => (
  <div>
    <img src={mapmarker} alt="map-marker" />
  </div>
);
const AnyReactComponent5 = () => (
  <div>
    <img src={mapmarkergeen} alt="map-marker" />
  </div>
);
const AnyReactComponent6 = () => (
  <div>
    <img src={mapmarkergeen} alt="map-marker" />
  </div>
);
const AnyReactComponent7 = () => (
  <div>
    <img src={mapmarkergeen} alt="map-marker" />
  </div>
);
const AnyReactComponent8 = () => (
  <div>
    <img src={mapmarkergeen} alt="map-marker" />
  </div>
);

const Map = p => {
  if (!localStorage.token) {
    p.history.push('/login');
  }

  const [center, setCenter] = useState({
    lat: -25.2743988,
    lng: 133.7751312
  });

  // Parent Div
  const [isOpenP, setIsOpenP] = useState(true);
  const toggleP = () => setIsOpenP(!isOpenP);

  // Child Div
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [value, setValue] = useState(false);
  const [asset1, setAsset1] = useState(false);
  const [asset2, setAsset2] = useState(false);
  const [asset3, setAsset3] = useState(false);
  const [asset4, setAsset4] = useState(false);
  const [asset5, setAsset5] = useState(false);
  const [asset6, setAsset6] = useState(false);
  const [asset7, setAsset7] = useState(false);
  const [asset8, setAsset8] = useState(false);
  const [zoom, setZoom] = useState(5);
  const assetSets = () => {
    setAsset1(!value);
    setAsset2(!value);
    setAsset3(!value);
    setAsset4(!value);
    setAsset5(!value);
    setAsset6(!value);
    setAsset7(!value);
    setAsset8(!value);
    setValue(!value);
  };

  const setAllChange = () => {
    if (value) {
      assetSets();
      return false;
    }
    if (!value) {
      assetSets();
      return false;
    }
  };

  const [data1, setData1] = useState([
    { zoom: 5, lat: -25.2743988, lng: 133.7751312, name: 'australia' },
    { zoom: 10, lat: -26.2743948, lng: 134.7751312, name: 'asset1' },
    { zoom: 10, lat: -27.2743938, lng: 135.7751322, name: 'asset2' },
    { zoom: 10, lat: -28.2743927, lng: 136.7751332, name: 'asset3' },
    { zoom: 10, lat: -24.2743919, lng: 133.7751342, name: 'asset4' },
    { zoom: 10, lat: -25.107516, lng: 148.982235, name: 'asset5' },
    { zoom: 10, lat: -26.107516, lng: 149.982235, name: 'asset6' },
    { zoom: 10, lat: -27.107516, lng: 150.982235, name: 'asset7' },
    { zoom: 10, lat: -28.107516, lng: 147.982235, name: 'asset8' }
  ]);

  const setMap = e => {
    setZoom(e.zoom);
    setCenter({
      lat: e.lat,
      lng: e.lng
    });

    if (e.name === 'asset1') {
      setAsset1(true);
    } else if (e.name === 'asset2') {
      setAsset2(true);
    } else if (e.name === 'asset3') {
      setAsset3(true);
    } else if (e.name === 'asset4') {
      setAsset4(true);
    } else if (e.name === 'asset5') {
      setAsset5(true);
    } else if (e.name === 'asset6') {
      setAsset6(true);
    } else if (e.name === 'asset7') {
      setAsset7(true);
    } else if (e.name === 'asset8') {
      setAsset8(true);
    }
  };

  const AnyReactComponent = ({ text }) => (
    <div>
      <img src={mapmarker} alt="map-marker" />
    </div>
  );

  // const AnyReactComponent3 = () => <h5 className="markern1">Omni-tuff QLD</h5>;
  console.log('center ', center, 'Zoom', zoom);
  return (
    <>
      <Header props={p} />
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
                    <input
                      type="checkbox"
                      className="minus"
                      onClick={toggleP}
                      checked={isOpenP}
                    />
                  </a>
                  <a href="#" className="nav-link">
                    <input
                      type="checkbox"
                      onClick={toggleP}
                      checked={isOpenP}
                    />
                  </a>
                  <a href="#" className="nav-link">
                    <img src={azIcon} alt="az-icon" onClick={toggleP} />
                  </a>
                </div>
                <div className="d-inline-flex align-items-center">
                  <a href="#" className="nav-link">
                    <i
                      className="fa fa-crosshairs"
                      onClick={() => setMap(data1[0])}
                    />
                  </a>
                  <a href="#" className="nav-link">
                    <i className="fa fa-comment" />
                  </a>
                  <a href="#" className="nav-link">
                    <i className="fa fa-times" />
                  </a>
                </div>
              </div>
              <Collapse isOpen={isOpenP}>
                <div className="d-flex align-items-center map-fliter fliter2 justify-content-between">
                  <div className="d-inline-flex align-items-center">
                    <a href="#" className="nav-link">
                      <input
                        type="checkbox"
                        className="minus"
                        onClick={toggle}
                        checked={isOpen}
                      />
                    </a>
                    <a href="#" className="nav-link">
                      <input
                        type="checkbox"
                        checked={value}
                        onClick={setAllChange}
                      />
                    </a>
                    <a href onClick={toggle} className="nav-link">
                      <img
                        src={engineimg}
                        alt="engine-icon"
                        className="black"
                      />
                      &nbsp;&nbsp;All units
                    </a>
                  </div>
                  <div className="d-inline-flex align-items-center">
                    <a href="#" className="nav-link">
                      <i className="fa fa-chevron-circle-down" />
                    </a>
                    <a href="#" className="nav-link">
                      <i
                        className="fa fa-times"
                        onClick={() => setIsOpenP(false)}
                      />
                    </a>
                  </div>
                </div>

                <Collapse isOpen={isOpen}>
                  <div className="d-flex align-items-center map-fliter fliter3 justify-content-between">
                    <div className="d-inline-flex align-items-center">
                      <a href="#" className="nav-link">
                        <input
                          type="checkbox"
                          checked={asset1}
                          onChange={() => setAsset1(!asset1)}
                        />
                      </a>
                      <a href="#" className="nav-link">
                        <i className="fa fa-square text-yellow" />
                      </a>
                      <a href="#" className="nav-link">
                        {data1[1].name}
                      </a>
                    </div>
                    <div className="d-inline-flex align-items-center">
                      <a href="#" className="nav-link">
                        <i
                          className="fa fa-crosshairs"
                          onClick={() => setMap(data1[1])}
                        />
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
                          checked={asset2}
                          onChange={() => setAsset2(!asset2)}
                        />
                      </a>
                      <a href="#" className="nav-link">
                        <i className="fa fa-square text-yellow" />
                      </a>
                      <a href="#" className="nav-link">
                        {data1[2].name}
                      </a>
                    </div>
                    <div className="d-inline-flex align-items-center">
                      <a href="#" className="nav-link">
                        <i
                          className="fa fa-crosshairs"
                          onClick={() => setMap(data1[2])}
                        />
                      </a>
                      <a href="#" className="nav-link">
                        <i className="fa fa-chevron-circle-down" />
                      </a>
                      <a href="#" className="nav-link">
                        <i className="fa fa-times" />
                      </a>
                    </div>
                  </div>

                  {/* Asset 3 */}
                  <div className="d-flex align-items-center map-fliter fliter3 justify-content-between">
                    <div className="d-inline-flex align-items-center">
                      <a href="#" className="nav-link">
                        <input
                          type="checkbox"
                          checked={asset3}
                          onChange={() => setAsset3(!asset3)}
                        />
                      </a>
                      <a href="#" className="nav-link">
                        <i className="fa fa-square text-yellow" />
                      </a>
                      <a href="#" className="nav-link">
                        {data1[3].name}
                      </a>
                    </div>
                    <div className="d-inline-flex align-items-center">
                      <a href="#" className="nav-link">
                        <i
                          className="fa fa-crosshairs"
                          onClick={() => setMap(data1[3])}
                        />
                      </a>
                      <a href="#" className="nav-link">
                        <i className="fa fa-chevron-circle-down" />
                      </a>
                      <a href="#" className="nav-link">
                        <i className="fa fa-times" />
                      </a>
                    </div>
                  </div>

                  {/* Asset 4 */}
                  <div className="d-flex align-items-center map-fliter fliter3 justify-content-between">
                    <div className="d-inline-flex align-items-center">
                      <a href="#" className="nav-link">
                        <input
                          type="checkbox"
                          checked={asset4}
                          onChange={() => setAsset4(!asset4)}
                        />
                      </a>
                      <a href="#" className="nav-link">
                        <i className="fa fa-square text-yellow" />
                      </a>
                      <a href="#" className="nav-link">
                        {data1[4].name}
                      </a>
                    </div>
                    <div className="d-inline-flex align-items-center">
                      <a href="#" className="nav-link">
                        <i
                          className="fa fa-crosshairs"
                          onClick={() => setMap(data1[4])}
                        />
                      </a>
                      <a href="#" className="nav-link">
                        <i className="fa fa-chevron-circle-down" />
                      </a>
                      <a href="#" className="nav-link">
                        <i className="fa fa-times" />
                      </a>
                    </div>
                  </div>

                  {/* Asset 5 */}
                  <div className="d-flex align-items-center map-fliter fliter3 justify-content-between">
                    <div className="d-inline-flex align-items-center">
                      <a href="#" className="nav-link">
                        <input
                          type="checkbox"
                          checked={asset5}
                          onChange={() => setAsset5(!asset5)}
                        />
                      </a>
                      <a href="#" className="nav-link">
                        <i className="fa fa-square text-yellow" />
                      </a>
                      <a href="#" className="nav-link">
                        {data1[5].name}
                      </a>
                    </div>
                    <div className="d-inline-flex align-items-center">
                      <a href="#" className="nav-link">
                        <i
                          className="fa fa-crosshairs"
                          onClick={() => setMap(data1[5])}
                        />
                      </a>
                      <a href="#" className="nav-link">
                        <i className="fa fa-chevron-circle-down" />
                      </a>
                      <a href="#" className="nav-link">
                        <i className="fa fa-times" />
                      </a>
                    </div>
                  </div>

                  {/* Asset 6 */}
                  <div className="d-flex align-items-center map-fliter fliter3 justify-content-between">
                    <div className="d-inline-flex align-items-center">
                      <a href="#" className="nav-link">
                        <input
                          type="checkbox"
                          checked={asset6}
                          onChange={() => setAsset6(!asset6)}
                        />
                      </a>
                      <a href="#" className="nav-link">
                        <i className="fa fa-square text-yellow" />
                      </a>
                      <a href="#" className="nav-link">
                        {data1[6].name}
                      </a>
                    </div>
                    <div className="d-inline-flex align-items-center">
                      <a href="#" className="nav-link">
                        <i
                          className="fa fa-crosshairs"
                          onClick={() => setMap(data1[6])}
                        />
                      </a>
                      <a href="#" className="nav-link">
                        <i className="fa fa-chevron-circle-down" />
                      </a>
                      <a href="#" className="nav-link">
                        <i className="fa fa-times" />
                      </a>
                    </div>
                  </div>

                  {/* Asset 7 */}
                  <div className="d-flex align-items-center map-fliter fliter3 justify-content-between">
                    <div className="d-inline-flex align-items-center">
                      <a href="#" className="nav-link">
                        <input
                          type="checkbox"
                          checked={asset7}
                          onChange={() => setAsset7(!asset7)}
                        />
                      </a>
                      <a href="#" className="nav-link">
                        <i className="fa fa-square text-yellow" />
                      </a>
                      <a href="#" className="nav-link">
                        {data1[7].name}
                      </a>
                    </div>
                    <div className="d-inline-flex align-items-center">
                      <a href="#" className="nav-link">
                        <i
                          className="fa fa-crosshairs"
                          onClick={() => setMap(data1[7])}
                        />
                      </a>
                      <a href="#" className="nav-link">
                        <i className="fa fa-chevron-circle-down" />
                      </a>
                      <a href="#" className="nav-link">
                        <i className="fa fa-times" />
                      </a>
                    </div>
                  </div>

                  {/* Asset 8 */}
                  <div className="d-flex align-items-center map-fliter fliter3 justify-content-between">
                    <div className="d-inline-flex align-items-center">
                      <a href="#" className="nav-link">
                        <input
                          type="checkbox"
                          checked={asset8}
                          onChange={() => setAsset8(!asset8)}
                        />
                      </a>
                      <a href="#" className="nav-link">
                        <i className="fa fa-square text-yellow" />
                      </a>
                      <a href="#" className="nav-link">
                        {data1[8].name}
                      </a>
                    </div>
                    <div className="d-inline-flex align-items-center">
                      <a href="#" className="nav-link">
                        <i
                          className="fa fa-crosshairs"
                          onClick={() => setMap(data1[8])}
                        />
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
              </Collapse>
            </div>
          </div>
          <div className="col-md-10 p-0">
            <div
              style={{ height: '100vh', width: '100%', position: 'relative' }}
              className="mobimap"
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
                {asset1 && (
                  <AnyReactComponent1 lat={data1[1].lat} lng={data1[1].lng} />
                )}
                {asset2 && (
                  <AnyReactComponent2 lat={data1[2].lat} lng={data1[2].lng} />
                )}
                {asset3 && (
                  <AnyReactComponent3 lat={data1[3].lat} lng={data1[3].lng} />
                )}
                {asset4 && (
                  <AnyReactComponent4 lat={data1[4].lat} lng={data1[4].lng} />
                )}
                {asset5 && (
                  <AnyReactComponent5 lat={data1[5].lat} lng={data1[5].lng} />
                )}
                {asset6 && (
                  <AnyReactComponent6 lat={data1[6].lat} lng={data1[6].lng} />
                )}
                {asset7 && (
                  <AnyReactComponent7 lat={data1[7].lat} lng={data1[7].lng} />
                )}
                {asset8 && (
                  <AnyReactComponent8 lat={data1[8].lat} lng={data1[8].lng} />
                )}
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
