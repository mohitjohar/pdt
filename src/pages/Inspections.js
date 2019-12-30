import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InspectionModel from '../components/InspectionModel';
import Pdf from '../pdf/report.pdf';
import AtachmentIcon from '../img/attachment.png';

const className = 'Model';
const Inspection = [
  {
    Date: '01/05/20',
    SiteAbb: 'OD',
    Equipment: 'J1589-01-00 Gearbox',
    Status: 'Complete',
    Report: '202005015 Inspection Report',
    ReportL: Pdf,
    Document: 'RGM JRA',
    DocumentL: Pdf
  },
  {
    Date: '01/05/20',
    SiteAbb: 'OD',
    Equipment: 'CC 3-CC4-CSS+Spare Drive Assembly',
    Status: 'Complete',
    Report: '20200501.C Inspection Report',
    ReportL: Pdf,
    Document: 'FSM JRA',
    DocumentL: Pdf
  },
  {
    Date: '01/05/20',
    SiteAbb: 'OD',
    Equipment: '2BF1353 Vacuum Pump	',
    Status: 'Pending',
    Report: 'A20200501.K Inspection Report',
    ReportL: Pdf,
    Document: 'LKT JRA',
    DocumentL: Pdf
  }
];

const Inspections = p => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="page bg-gray">
      <Header />
      <div className="content min-height-500 pt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <button className="btn btn-primary mb-2">Inspections</button>
            </div>
            <div className="col-md-8" />
          </div>
          <div className="overflow-auto-table">
            <table className="list-table w-100">
              <tr>
                <th>
                  Date <i className="fa fa-sort-down" />
                </th>
                <th className="site-abb">Site Abbreviation</th>
                <th className="equipment">Equipment Name</th>
                <th className="status">Status</th>
                <th className="inspection">Inspection Report</th>
                <th className="document">Risk Document</th>
              </tr>

              {Inspection.map((item, i) => {
                return (
                  <>
                    <tr>
                      <td
                        onClick={toggle}
                        style={{ cursor: 'pointer' }}
                        title="Click here"
                      >
                        {item.Date}
                      </td>
                      <td
                        onClick={toggle}
                        style={{ cursor: 'pointer' }}
                        title="Click here"
                      >
                        {item.SiteAbb}
                      </td>
                      <td
                        onClick={toggle}
                        style={{ cursor: 'pointer' }}
                        title="Click here"
                      >
                        {item.Equipment}
                      </td>
                      <td>{item.Status}</td>
                      <td>
                        <a
                          href={item.ReportL}
                          target="new"
                          title="download PDF"
                        >
                          <img src={AtachmentIcon} alt="attachmentIcon" />
                          {item.Report}
                        </a>
                      </td>
                      <td>
                        <a
                          href={item.DocumentL}
                          target="new"
                          title="download PDF"
                        >
                          <img src={AtachmentIcon} alt="attachmentIcon" />
                          {item.Document}
                        </a>
                      </td>
                    </tr>

                    {/* Model Start */}
                    <InspectionModel
                      Date={item.Date}
                      SiteAbb={item.SiteAbb}
                      Equipment={item.Equipment}
                      Status={item.Status}
                      Report={item.Report}
                      ReportL={item.ReportL}
                      Document={item.Document}
                      DocumentL={item.DocumentL}
                      className={className + i}
                      modal={modal}
                      toggle={toggle}
                    />
                    {/* Model end */}
                  </>
                );
              })}
            </table>
          </div>
        </div>
      </div>
      <footer className="zindex-100 navbar navbar-transparent footer2 mb-0">
        <Footer />
      </footer>
    </div>
  );
};

export default Inspections;
