import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Candidat.css";

function Candidat({ candidat }) {
  return (
    <div className="col-4" key={candidat.id}>
      <Link to={"/reports/" + candidat.id} className="active-link">
        <div className="card shadow-lg p-3 mb-5 bg-white rounded avatar">
          <img
            src={candidat.avatar}
            className="rounded-circle img-responsive"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">{candidat.name}</p>
            <p className="card-text">{candidat.email}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default withRouter(Candidat);
