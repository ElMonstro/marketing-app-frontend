import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AOS from "aos";

import RouteWithLayout from "./RouteWithLayout";
import HomeLayout from "./views/layouts";
import Dashboard from "./views/dashboard";
import "aos/dist/aos.css";
import { Homepage, UssdProductPage, BulkSmsProductPage } from "./components";
import Auth from "./views/auth/index";

const Routes = () => {
  AOS.init();

  return (
    <BrowserRouter>
      <Switch>
        {/* Homepage Layout */}
        <RouteWithLayout
          exact
          path="/"
          layout={HomeLayout}
          component={Homepage}
        />
        <RouteWithLayout
          exact
          path="/ussd"
          layout={HomeLayout}
          component={UssdProductPage}
        />
        <RouteWithLayout
          exact
          path="/bulk/sms"
          layout={HomeLayout}
          component={BulkSmsProductPage}
        />
        <RouteWithLayout
          exact
          path="/auth"
          layout={HomeLayout}
          component={Auth}
        />

        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
