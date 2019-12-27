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
              <div className="list">
                <div className="d-flex justify-content-center">
                  <strong>Status</strong>
                  <div>Completed</div>
                </div>
                <div className="d-flex justify-content-center">
                  <strong>Equipment Name</strong>
                  <div>J1589-01-00</div>
                </div>
                <div className="d-flex justify-content-center">
                  <strong>Inspection Report</strong>
                  <div>
                    <a href={Pdf} target="new" title="download PDF">
                      @202005015 Inspection Report
                    </a>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <strong>Ruk Document</strong>
                  <div>
                    <a href={Pdf} target="new" title="download PDF">
                      @RGM JRA
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
