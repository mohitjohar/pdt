import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logoimg from '../img/pdt-logo.png';
import Pdf from '../pdf/report.pdf';
import AtachmentIcon from '../img/attachment.png';

const AddUser = () => {
  return (
    <>
      <Header />
      <div className="content gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <h1>Inspection Detail</h1>
              <img
                src="post-img"
                src={Logoimg}
                alt="img"
                className="inspectionimg"
              />
              <div className="detail-list">
                <div className="d-flex justify-content-center">
                  <strong className="w-100">Date</strong>
                  <div className="w-100">01/05/20</div>
                </div>
                <div className="d-flex justify-content-center">
                  <strong className="w-100">Site Abbreviation</strong>
                  <div className="w-100">OD</div>
                </div>
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
                      <img src={AtachmentIcon} alt="attachmentIcon" />
                      202005015 Inspection Report
                    </a>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <strong className="w-100">Risk Document</strong>
                  <div className="w-100">
                    <a href={Pdf} target="new" title="download PDF">
                      <img src={AtachmentIcon} alt="attachmentIcon" />
                      RGM JRA
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="zindex-100 navbar navbar-transparent footer2 mb-0">
          <Footer />
        </footer>
      </div>
    </>
  );
};
export default AddUser;
