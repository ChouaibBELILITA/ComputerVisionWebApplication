import React from "react";
import { Route } from "react-router-dom";
import MyTable from "./components/table.js";
import Details from "./containers/Personinfos";
import Charts from "./components/totalStatistic";
import Home from "./containers/Home";
const BaseRouter = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/details/" component={MyTable} />
      <Route exact path="/details/:personId" component={Details} />
      <Route exact path="/statistics/" component={Charts} />
    </div>
  );
};

export default BaseRouter;
