import React from "react";
import Report from "../Report/Report";

function ReportsTable({ reports }) {
  const allReports = reports.map((report) => {
    return <Report report={report} key={report.id} />;
  });

  return (
  
    <>
      <div className="row">
        <div className="col-10 offset-1">
          <h3 className="display-4 m-4">Reports</h3>
          <div className="row">
            <div className="col-10 offset-1">
              <table className="table">
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Interview Date</th>
                    <th colSpan="2">Status</th>
                  </tr>
                </thead>
                <tbody>{allReports}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
 
    </>
  );
}

export default ReportsTable;
