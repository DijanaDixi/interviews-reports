import React from "react";
import { getDate } from "../../utils/utils";

function DetailsReport({ candidat }) {
  // console.log(candidat)
  return (
    <>
   
      <div className="container">
        <div className="row reports">
          <div className="col-3">
            <img src={candidat.avatar} alt="" />
          </div>
          <div className="col-3 details">
            <h3>Name:</h3>
            <p>{candidat.name}</p>
            <h3>Email:</h3>
            <p>{candidat.email}</p>
          </div>
          <div className="col-3 details">
            <h3>Date of birth:</h3>
            <p>{getDate(candidat.birthday)}</p>
            <h3>Email:</h3>
            <p>{candidat.education}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailsReport;
