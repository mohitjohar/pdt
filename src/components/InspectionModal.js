import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AtachmentIcon from '../img/attachment.png';

const InspectionModal = item => {
  return (
    <>
      <Modal
        isOpen={item.modal}
        toggle={item.toggle}
        className={item.className}
      >
        <ModalHeader toggle={item.toggle}>Inspection Detail</ModalHeader>
        <ModalBody>
          <div className="detail-list">
            <div className="d-flex justify-content-center">
              <strong className="w-100">Date</strong>
              <div className="w-100">{item.Date}</div>
            </div>
            <div className="d-flex justify-content-center">
              <strong className="w-100">Site Abbreviation</strong>
              <div className="w-100">{item.SiteAbb}</div>
            </div>
            <div className="d-flex justify-content-center">
              <strong className="w-100">Equipment Name</strong>
              <div className="w-100">{item.Equipment}</div>
            </div>
            <div className="d-flex justify-content-center">
              <strong className="w-100">Status</strong>
              <div className="w-100">{item.Status}</div>
            </div>
            <div className="d-flex justify-content-center">
              <strong className="w-100">Inspection Report</strong>
              <div className="w-100">
                <a href={item.ReportL} target="new" title="download PDF">
                  <img src={AtachmentIcon} alt="attachmentIcon" />
                  {item.Report}
                </a>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <strong className="w-100">Risk Document</strong>
              <div className="w-100">
                <a href={item.DocumentL} target="new" title="download PDF">
                  <img src={AtachmentIcon} alt="attachmentIcon" />
                  {item.Document}
                </a>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <strong className="w-100">Prioritisation Of Corrective Action</strong>
              <div className="w-100">
                {item.Prioritisation}
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={item.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default InspectionModal;
