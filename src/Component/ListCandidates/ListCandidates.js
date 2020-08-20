import React from "react";
import Candidat from "../Candidat/Candidat";
import "./ListCandidates.css";

function ListCandidates({ candidates, searchCandidates }) {
  const allCandidates = candidates.map((candidat) => {
    return <Candidat candidat={candidat} key={candidat.id} />;
  });

  return (
    <>
      <div className="input-holder">

        <h2>Candidates</h2>
        {/* Input search candidat */}
        <input
          onChange={(event) => searchCandidates(event.target.value)}
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <hr />
      </div>
      <div className="container">
        {/* All candidates placeholder*/}
        <div className="row">{allCandidates}</div>
      </div>
    </>
  );
}

export default ListCandidates;
