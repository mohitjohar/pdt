import React, { useState } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import Slider from 'react-slick';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RightArrowImage from '../img/right.png';
import LeftArrowImage from '../img/Left.png';

const RightArrow = props => {
  const { onClick } = props;
  return (
    <div className="btn-arrow btn-arrow-right" onClick={onClick}>
      <img className="img-arrow" src={RightArrowImage} alt="next" />
    </div>
  );
};

const LeftArrow = props => {
  const { onClick } = props;
  return (
    <div className="btn-arrow btn-arrow-left" onClick={onClick}>
      <img className="img-arrow" src={LeftArrowImage} alt="previous" />
    </div>
  );
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  // pauseOnHover: true,
  // fade: true,
  lazyLoad: true,
  nextArrow: <RightArrow />,
  prevArrow: <LeftArrow />,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
};

const Dashboard = () => {
  const locations = [
    {
      inspectionc: '40',
      inspectionm: '70',
      reduction: '60'
    },
    {
      inspectionc: '50',
      inspectionm: '80',
      reduction: '20'
    },
    {
      inspectionc: '20',
      inspectionm: '0',
      reduction: '10'
    },
    {
      inspectionc: '90',
      inspectionm: '30',
      reduction: '80'
    },
    {
      inspectionc: '35',
      inspectionm: '90',
      reduction: '100'
    }
  ];

  const locations2 = [
    {
      inspectionc: '150',
      inspectionm: '200',
      reduction: '6'
    },
    {
      inspectionc: '50',
      inspectionm: '100',
      reduction: '8'
    },
    {
      inspectionc: '200',
      inspectionm: '250',
      reduction: '3'
    },
    {
      inspectionc: '110',
      inspectionm: '130',
      reduction: '7'
    },
    {
      inspectionc: '90',
      inspectionm: '140',
      reduction: '5'
    }
  ];

  const [location, setLocation] = useState(locations[0]);
  const [location2, setLocation2] = useState(locations2[0]);

  const handelLocation = e => {
    setLocation(locations[e]);
  };
  const handelLocation2 = e => {
    setLocation2(locations2[e]);
  };
  console.log('Location', location);

  return (
    <div className="page bg-gray">
      <Header />
      <div className="content">
        <div className="meters">
          <div className="container">
            <div className="text-right">
              <select
                className="form-control"
                onChange={e => handelLocation(e.target.value)}
              >
                <option value="0">Australia</option>
                <option value="1">OD</option>
                <option value="2">Mt Arthur</option>
                <option value="3">WAIO</option>
                <option value="4">Mackay</option>
              </select>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <ReactSpeedometer
                  maxValue={100}
                  customSegmentStops={[0, 20, 40, 60, 50, 80, 100]}
                  segmentColors={[
                    'red',
                    'red',
                    'red',
                    'orange',
                    'orange',
                    'green'
                  ]}
                  value={location.inspectionc}
                  needleColor="#000"
                />
                <div className="heading1">
                  <span>{location.inspectionc}</span>% Inspections Completed
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <ReactSpeedometer
                  maxValue={100}
                  customSegmentStops={[0, 20, 40, 60, 50, 80, 100]}
                  segmentColors={[
                    'red',
                    'red',
                    'red',
                    'orange',
                    'orange',
                    'green'
                  ]}
                  value={location.inspectionm}
                  needleColor="#000"
                />
                <div className="heading1">
                  <span>{location.inspectionm}</span>% Inspections Met Standard
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <ReactSpeedometer
                  maxValue={100}
                  customSegmentStops={[0, 20, 40, 60, 50, 80, 100]}
                  segmentColors={[
                    'red',
                    'red',
                    'red',
                    'orange',
                    'orange',
                    'green'
                  ]}
                  value={location.reduction}
                  needleColor="#000"
                />
                <div className="heading1">
                  <span>{location.reduction}</span>% Reduction In Rework Costing
                </div>
              </div>
            </div>
          </div>

          <hr className="spacer" />

          <div className="container">
            <div className="text-right">
              <select
                className="form-control"
                onChange={e => handelLocation2(e.target.value)}
              >
                <option value="0">Australia</option>
                <option value="1">OD</option>
                <option value="2">Mt Arthur</option>
                <option value="3">WAIO</option>
                <option value="4">Mackay</option>
              </select>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <ReactSpeedometer
                  maxValue={200}
                  customSegmentStops={[0, 1, 6, 40, 80, 120, 160, 200]}
                  segmentColors={[
                    'green',
                    'orange',
                    'orange',
                    'red',
                    'red',
                    'red',
                    'red',
                    'red'
                  ]}
                  value={location2.inspectionc}
                  needleColor="#000"
                />
                <div className="heading1">
                  <span>{location.inspectionm}</span># Critical Spares pending
                  BHP Approval
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <ReactSpeedometer
                  maxValue={250}
                  customSegmentStops={[0, 1, 6, 40, 80, 120, 160, 200, 250]}
                  segmentColors={[
                    'green',
                    'orange',
                    'orange',
                    'red',
                    'red',
                    'red',
                    'red',
                    'red',
                    'red'
                  ]}
                  value={location2.inspectionm}
                  needleColor="#000"
                />

                <div className="heading1">
                  <span>{location2.inspectionm}</span># Critical Spares pending
                  Vendor Repair
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <ReactSpeedometer
                  maxValue={10}
                  customSegmentStops={[0, 0.1, 2, 4, 6, 10]}
                  segmentColors={['green', 'orange', 'orange', 'orange', 'red']}
                  value={location2.reduction}
                  needleColor="#000"
                />
                <div className="heading1">
                  <span>{location2.reduction}</span># Critical Spares Missing
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <h3 className="text-center heading-3">Recent Inspections</h3>
          <div className="row">
            <div className="col-md-12">
              <div className="image-slider">
                <Slider {...sliderSettings}>
                  <img
                    src="img/slides/slide1.PNG"
                    className="w-100"
                    alt="slide"
                  />
                  <img
                    src="img/slides/slide2.PNG"
                    className="w-100"
                    alt="slide"
                  />
                  <img
                    src="img/slides/slide3.png"
                    className="w-100"
                    alt="slide"
                  />
                  <img
                    src="img/slides/slide4.jpg"
                    className="w-100"
                    alt="slide"
                  />
                  <img
                    src="img/slides/slide5.PNG"
                    className="w-100"
                    alt="slide"
                  />
                  <img
                    src="img/slides/slide6.PNG"
                    className="w-100"
                    alt="slide"
                  />
                  <img
                    src="img/slides/slide7.PNG"
                    className="w-100"
                    alt="slide"
                  />
                  <img
                    src="img/slides/slide8.PNG"
                    className="w-100"
                    alt="slide"
                  />
                  <img
                    src="img/slides/slide9.jpg"
                    className="w-100"
                    alt="slide"
                  />
                  <img
                    src="img/slides/slide10.jpg"
                    className="w-100"
                    alt="slide"
                  />
                  <img
                    src="img/slides/slide11.png"
                    className="w-100"
                    alt="slide"
                  />
                  <img
                    src="img/slides/slide12.png"
                    className="w-100"
                    alt="slide"
                  />
                  <img
                    src="img/slides/slide13.jpg"
                    className="w-100"
                    alt="slide"
                  />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="zindex-100 navbar navbar-transparent footer2 mb-0">
        <Footer />
      </footer>
    </div>
  );
};

export default Dashboard;
