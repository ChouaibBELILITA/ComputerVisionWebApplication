import React from "react";
import { Route } from "react-router-dom";
import MyTable from "./components/table.js";
import Details from "./containers/Personinfos";
const BaseRouter = () => {
  return (
    <div>
      <Route exact path="/details/" component={MyTable} />
      <Route exact path="/details/:personId" component={Details} />
    </div>
  );
};

export default BaseRouter;
