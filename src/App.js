import React from "react";
import { Route, BrowserRouter} from "react-router-dom";
import HomePage from "./Component/HomePage/HomePage";
import ReportsPage from "./Component/ReportsPage/ReportsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Home page */}

        <Route path="/" exact>
          <HomePage />
        </Route>
        {/* Reports page */}
        <Route path="/reports/:id" >
          <ReportsPage />
        </Route>
      </BrowserRouter>
    </>
  );
}
export default App;
