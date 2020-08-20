import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Header/Header";
import DetailsReport from "../DetailsReport/DetailsReports";
import ReportsTable from "../ReportsTable/ReportsTable";
import "./ReportsPage.css";

function ReportsPage(props) {

const id=props.match.params.id
  const [candidat, getCandidat] = useState({});

  const [reports, getReports] = useState([]);
  const fetchCandidate = () => {
    fetch("http://localhost:3333/api/candidates/" +id )
      .then((response) => response.json())
      .then((data) => {
        getCandidat(data);
        console.log(data);
    
      });
  };
  const fetchReports = () => {
    fetch("http://localhost:3333/api/reports")
      .then((response) => response.json())
      .then((data) => {
     
        getReports(data.filter((c) => c.candidateId == props.match.params.id)); 
      });
  };
  useEffect(() => {
     fetchCandidate();
     fetchReports();

  }, []);

  return (
    <>
      <Header />
      <DetailsReport candidat={candidat} key={candidat.id} />
      <ReportsTable reports={reports} />
    </>
  );
}

export default withRouter(ReportsPage);
