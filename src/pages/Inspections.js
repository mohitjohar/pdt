import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Inspections = () => {
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
                <td>01/05/20</td>
                <td>OD</td>
                <td>J1589-01-00</td>
                <td>Complete</td>
                <td>202005015 Inspection Report</td>
                <td>@RGM JRA</td>
              </tr>
              <tr>
                <td>01/05/20</td>
                <td>OD</td>
                <td>CC 3-CC4-CSS+Spare</td>
                <td>Complete</td>
                <td>20200501.C Inspection Report</td>
                <td>@FSM JRA</td>
              </tr>
              <tr>
                <td>01/05/20</td>
                <td>OD</td>
                <td>2BF1353 Vacuum Pump</td>
                <td>Pending</td>
                <td>20200501.K Inspection Report</td>
                <td>@LKT JRA</td>
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
