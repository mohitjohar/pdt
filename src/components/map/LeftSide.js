import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import azIcon from '../../img/AZ.png';
import carsIcon from '../../img/cars.png';

const LeftSide = ({ handelChange, handelChanges, handleValue }) => {
  const [values, setValue] = useState(true);
  const [data, setData] = useState(true);
  const [name, setName] = useState(true);
  const handleClick = () => {
    setValue(!values);
    handelChange(values);
  };
  const handleClicks = () => {
    setData(!data);
    handelChanges(data);
  };
  const handleLocation = () => {
    setName(!name);
    handleValue(name);
  };

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  console.log('leftside', data);
  return (
    <div className="map-left-sidebar">
      <div className="d-flex align-item-center map-fliter">
        <div className="nav-link w-100">
          <input type="text" placeholder="Search" className="control-search" />
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
            <input type="checkbox" value={name} onClick={handleLocation} />
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
              <input type="checkbox" value={values} onClick={handleClick} />
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
              <input type="checkbox" value={data} onClick={handleClicks} />
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
  );
};

export default LeftSide;
