import React, { useState } from "react";
import ModalDialog from "../ModalDialog/ModalDialog";
import { capitalLetter, getDate } from "../../utils/utils";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Report.css";
function Report({ report }) {
// console.log(report)

// show Modal
  const [show, setShow] = useState(false);

  const changeShow = () => {
    setShow(!show);
  };

  return (
    <>
      <tr>
        <td>{report.companyName}</td>
        <td>{getDate(report.interviewDate)}</td>
        <td>{capitalLetter(report.status)}</td>
        <td onClick={() => changeShow()}>
          {/* Modal eye */}
          <FontAwesomeIcon icon={faEye} />
        </td>
        {/* Modal */}
        <ModalDialog report={report} show={show} changeShow={changeShow} />
      </tr>
    </>
  );
}

export default Report;
