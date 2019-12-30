import React, { useState } from 'react';
import InspectionModal from './InspectionModal';
import AtachmentIcon from '../img/attachment.png';

const InspectionItem = ({ item, i }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const className = 'Model';
  return (
    <>
      <tr>
        <td onClick={toggle} style={{ cursor: 'pointer' }} title="Click here">
          {item.Date}
        </td>
        <td onClick={toggle} style={{ cursor: 'pointer' }} title="Click here">
          {item.SiteAbb}
        </td>
        <td onClick={toggle} style={{ cursor: 'pointer' }} title="Click here">
          {item.Equipment}
        </td>
        <td>{item.Status}</td>
        <td>
          <a href={item.ReportL} target="new" title="download PDF">
            <img src={AtachmentIcon} alt="attachmentIcon" />
            {item.Report}
          </a>
        </td>
        <td>
          <a href={item.DocumentL} target="new" title="download PDF">
            <img src={AtachmentIcon} alt="attachmentIcon" />
            {item.Document}
          </a>
        </td>
      </tr>
      <InspectionModal
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
    </>
  );
};

export default InspectionItem;
