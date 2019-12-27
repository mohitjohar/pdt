import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pdf from '../pdf/report.pdf';

const Inspections = p => {
  return (
    <div className="page bg-gray">
      <Header />
      <div className="content min-height-500 pt-3">
        <div className="container">
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
                <th className="document">Ruk Document</th>
              </tr>
              <tr>
                <td
                  onClick={() => p.history.push('/detail')}
                  style={{ cursor: 'pointer' }}
                  title="Click to go Detail"
                >
                  01/05/20
                </td>
                <td
                  onClick={() => p.history.push('/detail')}
                  style={{ cursor: 'pointer' }}
                  title="Click to go Detail"
                >
                  OD
                </td>
                <td
                  onClick={() => p.history.push('/detail')}
                  style={{ cursor: 'pointer' }}
                  title="Click to go Detail"
                >
                  J1589-01-00
                </td>
                <td>Complete</td>
                <td>
                  <a href={Pdf} target="new" title="download PDF">
                    @202005015 Inspection Report
                  </a>
                </td>
                <td>
                  <a href={Pdf} target="new" title="download PDF">
                    @RGM JRA
                  </a>
                </td>
              </tr>
              <tr>
                <td
                  onClick={() => p.history.push('/detail')}
                  style={{ cursor: 'pointer' }}
                  title="Click to go Detail"
                >
                  01/05/20
                </td>
                <td
                  onClick={() => p.history.push('/detail')}
                  style={{ cursor: 'pointer' }}
                  title="Click to go Detail"
                >
                  OD
                </td>
                <td
                  onClick={() => p.history.push('/detail')}
                  style={{ cursor: 'pointer' }}
                  title="Click to go Detail"
                >
                  CC 3-CC4-CSS+Spare
                </td>
                <td>Complete</td>
                <td>
                  <a href={Pdf} target="new" title="download PDF">
                    @20200501.C Inspection Report
                  </a>
                </td>
                <td>
                  <a href={Pdf} target="new" title="download PDF">
                    @FSM JRA
                  </a>
                </td>
              </tr>
              <tr>
                <td
                  onClick={() => p.history.push('/detail')}
                  style={{ cursor: 'pointer' }}
                  title="Click to go Detail"
                >
                  01/05/20
                </td>
                <td
                  onClick={() => p.history.push('/detail')}
                  style={{ cursor: 'pointer' }}
                  title="Click to go Detail"
                >
                  OD
                </td>
                <td
                  onClick={() => p.history.push('/detail')}
                  style={{ cursor: 'pointer' }}
                  title="Click to go Detail"
                >
                  2BF1353 Vacuum Pump
                </td>
                <td>Pending</td>
                <td>
                  <a href={Pdf} target="new" title="download PDF">
                    @A20200501.K Inspection Report
                  </a>
                </td>
                <td>
                  <a href={Pdf} target="new" title="download PDF">
                    @LKT JRA
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
