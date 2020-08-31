import React from "react";
import { Route } from "react-router-dom";
import PersonInfoList from "./containers/personInfoList.js";
import Details from "./containers/PersonDetailContainer";
import Charts from "./components/totalStatistic";
import EditPerson from "./components/EditPerson";
import Home from "./containers/Home";
const BaseRouter = () => {
  return (
    <div>
      <Route exact path="/detections/" component={PersonInfoList} />
      <Route exact path="/details/:personId/" component={Details} />
      <Route exact path="/statistics/" component={Charts} />
      <Route exact path="/home/:cameraId/" component={Home} />
      <Route exact path="/edit/" component={EditPerson} />
    </div>
  );
};

export default BaseRouter;


