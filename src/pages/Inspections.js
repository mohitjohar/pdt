import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pdf from '../pdf/report.pdf';
import InspectionItem from '../components/InspectionItem';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

const Inspection = [
  {
    Date: '01/05/20',
    SiteAbb: 'OD',
    EquipmentID: 'J1589-01-00',
    Equipment: 'Gearbox',
    Status: 'Completed',
    Report: '202005015 Inspection Report',
    ReportL: Pdf,
    Document: 'RGM JRA',
    DocumentL: Pdf
  },
  {
    Date: '01/05/20',
    SiteAbb: 'OD',
    EquipmentID: 'CC 3-CC4-CSS',
    Equipment: 'Spare Drive Assembly',
    Status: 'Completed',
    Report: '20200501.C Inspection Report',
    ReportL: Pdf,
    Document: 'FSM JRA',
    DocumentL: Pdf
  },
  {
    Date: '01/05/20',
    SiteAbb: 'OD',
    EquipmentID: '2BF1353',
    Equipment: 'Vacuum Pump',
    Status: 'Pending',
    Report: 'A20200501.K Inspection Report',
    ReportL: Pdf,
    Document: 'LKT JRA',
    DocumentL: Pdf
  }
];

const Inspections = p => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  // Date Filter
  const [searchDate, setSearchDate] = useState({
    startDate: null,
    endDate: null
  });
  const [focusedInput, setFocusedInput] = useState(null);
  console.log(
    'Start Date',
    searchDate.startDate,
    'End Date',
    searchDate.endDate,
    'focused Input',
    focusedInput
  );

  return (
    <div className="page bg-gray">
      <Header props={p} />
      <div className="content min-height-500 pt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 filter-area">
              <button
                className="btn btn-trasparent mb-2 bold p-0"
                onClick={toggle}
              >
                <input type="checkbox" className="minus i" checked={isOpen} />
                &nbsp;Filters
              </button>
              <Collapse isOpen={isOpen}>
                <div className="filter-dropdown row">
                  <div className="col-md-3">
                    <label>Search</label>
                    <div className="searchform">
                      <input
                        type="text"
                        placeholder="Search Equipment Name"
                        className="form-control mb-3"
                      />
                      <i className="fa fa-search" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label>Loaction</label>
                    <select className="form-control mb-3">
                      <option value="0">All</option>
                      <option value="1">Australia</option>
                      <option value="2">BMA</option>
                      <option value="3">BMC</option>
                      <option value="4">NEC</option>
                      <option value="5">OD</option>
                      <option value="6">WAIO</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label>Status</label>
                    <select className="form-control mb-3">
                      <option value="0">All</option>
                      <option value="1">Completed</option>
                      <option value="2">Pending</option>
                    </select>
                  </div>
                  <div className="col-md-4 mkDatePicker mb-3">
                    <label>Date</label>
                    <DateRangePicker
                      customInputIcon={
                        <i className="fa fa-calendar-o" aria-hidden="true" />
                      }
                      startDatePlaceholderText="02/02/2019"
                      endDatePlaceholderText="08/02/2019"
                      startDateId="startDate"
                      endDateId="endDate"
                      startDate={searchDate.startDate}
                      endDate={searchDate.endDate}
                      onDatesChange={({ startDate, endDate }) => {
                        setSearchDate({ startDate, endDate });
                      }}
                      focusedInput={focusedInput}
                      onFocusChange={focusedInput => {
                        setFocusedInput(focusedInput);
                      }}
                    />
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
          <div className="overflow-auto-table">
            <table className="list-table w-100">
              <tr>
                <th>
                  Date <i className="fa fa-sort-down" />
                </th>
                <th className="site-abb">Site Abbreviation</th>
                <th className="equipmentid">Equipment ID</th>
                <th className="equipment">Equipment Name</th>
                <th className="status">Status</th>
                <th className="inspection">Inspection Report</th>
                <th className="document">Risk Document</th>
              </tr>

              {Inspection.map((item, i) => {
                return (
                  <>
                    <InspectionItem item={item} i={i} />
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
