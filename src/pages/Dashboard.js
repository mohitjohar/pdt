import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <div className="page bg-gray">
     <Header/>
     <div className="content">
          
          <div className="meters">
            <div className="container">
          <div className="row">
          <div className="col-lg-4 col-md-6">
          <ReactSpeedometer
          maxValue={100}
    customSegmentStops={[0, 20, 40, 60,50, 80, 100]}
    segmentColors={['red', 'red', 'red', 'orange', 'orange', 'green']}
    value={40}
  />
          <div className="heading1"><span>40</span>% Inspections Completed</div>
        </div>
          <div className="col-lg-4 col-md-6">
          <ReactSpeedometer
          maxValue={100}
          customSegmentStops={[0, 20, 40, 60,50, 80, 100]}
          segmentColors={['red', 'red', 'red', 'orange', 'orange', 'green']}
    value={70}
  />
            <div className="heading1"><span>70</span>% Inspections Met Standard</div>
          </div>  
          <div className="col-lg-4 col-md-6">
          <ReactSpeedometer
          maxValue={100}
          customSegmentStops={[0, 20, 40, 60,50, 80, 100]}
          segmentColors={['red', 'red', 'red', 'orange', 'orange', 'green']}
    value={60}
  />
            <div className="heading1"><span>60</span>% Reduction In Rework Costing</div>
          </div>
          </div>
          </div>
          <hr className="spacer"/>
          <div className="container">
            <div className="row">
            <div className="col-lg-4 col-md-6">
            <ReactSpeedometer
          maxValue={200}
    customSegmentStops={[0,1,6, 40, 80, 120, 160, 200]}
    segmentColors={['green', 'orange', 'orange','red','red','red','red','red']}
    value={150}
  />
            <div className="heading1"><span>150</span># Critical Spares pending BHP Approval</div>
          </div>
            <div className="col-lg-4 col-md-6">
            <ReactSpeedometer
          maxValue={250}
          customSegmentStops={[0,1,6, 40, 80, 120, 160, 200, 250]}
          segmentColors={['green', 'orange', 'orange','red','red','red','red','red', 'red']}
    value={200}
  />

              <div className="heading1"><span>200</span># Critical Spares pending Vendor Repair</div>
            </div>  
            <div className="col-lg-4 col-md-6">
            <ReactSpeedometer
          maxValue={10}
          customSegmentStops={[0,0.1,2,4,6,10]}
          segmentColors={['green', 'orange', 'orange','orange','red']}
    value={6}
  />
              <div className="heading1"><span>6</span># Critical Spares Missing</div>
            </div>
            </div>
            </div>
          </div>


          <div className="container">
          <h3 className="text-center heading-3">Recent Inspections</h3>
            <div className="row">
              <div className="col-md-12">
              <div className="image-slider">
                <img src="img/slides/slide1.PNG" className="w-100" alt="slide"/>
                <img src="img/slides/slide2.PNG" className="w-100" alt="slide"/>
                <img src="img/slides/slide3.png" className="w-100" alt="slide"/>
                <img src="img/slides/slide4.jpg" className="w-100" alt="slide"/>
                <img src="img/slides/slide5.PNG" className="w-100" alt="slide"/>
                <img src="img/slides/slide6.PNG" className="w-100" alt="slide"/>
                <img src="img/slides/slide7.PNG" className="w-100" alt="slide"/>
                <img src="img/slides/slide8.PNG" className="w-100" alt="slide"/>
                <img src="img/slides/slide9.jpg" className="w-100" alt="slide"/>
                <img src="img/slides/slide10.jpg" className="w-100" alt="slide"/>
                <img src="img/slides/slide11.png" className="w-100" alt="slide"/>
                <img src="img/slides/slide12.png" className="w-100" alt="slide"/>
                <img src="img/slides/slide13.jpg" className="w-100" alt="slide"/>
              </div>
            </div>
          </div>
      </div>
    </div>
    <footer className="zindex-100 navbar navbar-transparent footer2 mb-0">
      <Footer/>
    </footer>
    </div>
  );
};

export default Dashboard;
