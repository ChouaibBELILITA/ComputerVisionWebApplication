import React from "react";
import { Route } from "react-router-dom";
import MyTable from "./components/table.js";
import Details from "./containers/Personinfos";
import Charts from "./components/totalStatistic";
import Home from "./containers/Home";
const BaseRouter = () => {
  return (
    <div>
      <Route exact path="/details/" component={MyTable} />
      <Route exact path="/details/:personId" component={Details} />
      <Route exact path="/statistics/" component={Charts} />
      <Route exact path="/home/:cameraId/" component={Home} />
    </div>
  );
};

export default BaseRouter;
