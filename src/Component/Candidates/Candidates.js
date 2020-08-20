import React, { useEffect, useState } from "react";
import ListCandidates from "../ListCandidates/ListCandidates";
import "./Candidates.css";

function Candidates() {
  // loader
  const [loader, setLoader] = useState(true);
  // All candidates
  const [candidates, setCandidates] = useState(() =>
    JSON.parse(localStorage.getItem("data"))
  );

  useEffect(() => {
    setLoader(true);
    fetch("http://localhost:3333/api/candidates")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        setCandidates(data);
        setTimeout(() => setLoader(false), 3000)
        localStorage.setItem("data", JSON.stringify(data));
      });
  }, [setCandidates]);

  // Search
  const searchCandidates = (val) => {
    // LocalStorage
    const candidatesFromLocalStorage = JSON.parse(localStorage.getItem("data"));
    // console.log(candidatesFromLocalStorage)
    const searchCandidate = candidatesFromLocalStorage.filter((candidat) =>
      candidat.name.toLowerCase().includes(val.toLowerCase())
    );
    setCandidates(searchCandidate);
  };

  return (
    <>
      <div className="container">
        {loader ? (
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          <ListCandidates
            candidates={candidates}
            searchCandidates={searchCandidates}
          />
        )}
      </div>
    </>
  );
}

export default Candidates;
