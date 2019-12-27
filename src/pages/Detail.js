import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logoimg from '../img/pdt-logo.png';
import Pdf from '../pdf/report.pdf';

const AddUser = () => {
  return (
    <>
      <Header />
      <div className="content gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <h1>Title</h1>
              <img src="post-img" src={Logoimg} alt="img" />
              <div className="detail-list">
                <div className="d-flex justify-content-center">
                  <strong className="w-100">Status</strong>
                  <div className="w-100">Completed</div>
                </div>
                <div className="d-flex justify-content-center">
                  <strong className="w-100">Equipment Name</strong>
                  <div className="w-100">J1589-01-00</div>
                </div>
                <div className="d-flex justify-content-center">
                  <strong className="w-100">Inspection Report</strong>
                  <div className="w-100">
                    <a href={Pdf} target="new" title="download PDF">
                      @202005015 Inspection Report
                    </a>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <strong className="w-100">Ruk Document</strong>
                  <div className="w-100">
                    <a href={Pdf} target="new" title="download PDF">
                      @RGM JRA
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex
            mauris, egestas at turpis in, hendrerit vestibulum neque.
            Pellentesque a auctor orci. Cras id porttitor urna, in ornare
            turpis. Nullam vitae neque arcu. Suspendisse potenti. Sed egestas
            vel velit ac semper. Vestibulum sodales tempus erat pellentesque
            feugiat. Nulla laoreet justo vel venenatis euismod. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae; Sed eget condimentum lorem, vel eleifend sem. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
      <footer className="zindex-100 navbar navbar-transparent footer2 mb-0">
        <Footer />
      </footer>
    </>
  );
};
export default AddUser;
