import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pdf from '../pdf/report.pdf';
import AtachmentIcon from '../img/attachment.png';

const Inspections = p => {
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
              <tr>
                <td
                  // onClick={() => p.history.push('/detail')}
                  style={{ cursor: 'pointer' }}
                  title="Click to go Detail"
                >
                  01/05/20
                </td>
                <td
                  // onClick={() => p.history.push('/detail')}
                  style={{ cursor: 'pointer' }}
                  title="Click to go Detail"
                >
                  OD
                </td>
                <td
                  // onClick={() => p.history.push('/detail')}
                  style={{ cursor: 'pointer' }}
                  title="Click to go Detail"
                >
                  J1589-01-00 Gearbox
                </td>
                <td>Complete</td>
                <td>
                  <a href={Pdf} target="new" title="download PDF">
                    <img src={AtachmentIcon} alt="attachmentIcon" />
                    202005015 Inspection Report
                  </a>
                </td>
                <td>
                  <a href={Pdf} target="new" title="download PDF">
                    <img src={AtachmentIcon} alt="attachmentIcon" />
                    RGM JRA
                  </a>
                </td>
              </tr>
              <tr>
                <td
                  // onClick={() => p.history.push('/detail')}
                  style={{ cursor: 'pointer' }}
                  title="Click to go Detail"
                >
                  01/05/20
                </td>
                <td
                  // onClick={() => p.history.push('/detail')}
                  style={{ cursor: 'pointer' }}
                  title="Click to go Detail"
                >
                  OD
                </td>
                <td
                  // onClick={() => p.history.push('/detail')}
                  style={{ cursor: 'pointer' }}
                  title="Click to go Detail"
                >
                  CC 3-CC4-CSS+Spare Drive Assembly
                </td>
                <td>Complete</td>
                <td>
                  <a href={Pdf} target="new" title="download PDF">
                    <img src={AtachmentIcon} alt="attachmentIcon" />
                    20200501.C Inspection Report
                  </a>
                </td>
                <td>
                  <a href={Pdf} target="new" title="download PDF">
                    <img src={AtachmentIcon} alt="attachmentIcon" />
                    FSM JRA
                  </a>
                </td>
              </tr>
              <tr>
                <td
                  // onClick={() => p.history.push('/detail')}
                  style={{ cursor: 'pointer' }}
                  title="Click to go Detail"
                >
                  01/05/20
                </td>
                <td
                  // onClick={() => p.history.push('/detail')}
                  style={{ cursor: 'pointer' }}
                  title="Click to go Detail"
                >
                  OD
                </td>
                <td
                  // onClick={() => p.history.push('/detail')}
                  style={{ cursor: 'pointer' }}
                  title="Click to go Detail"
                >
                  2BF1353 Vacuum Pump
                </td>
                <td>Pending</td>
                <td>
                  <a href={Pdf} target="new" title="download PDF">
                    <img src={AtachmentIcon} alt="attachmentIcon" />
                    A20200501.K Inspection Report
                  </a>
                </td>
                <td>
                  <a href={Pdf} target="new" title="download PDF">
                    <img src={AtachmentIcon} alt="attachmentIcon" />
                    LKT JRA
                  </a>
                </td>
              </tr>
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
