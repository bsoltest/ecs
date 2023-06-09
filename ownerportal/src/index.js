/*!

=========================================================
* Paper Dashboard PRO React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import Login from "views/pages/Login.js";
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.1";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

// const root = ReactDOM.createRoot(document.getElementById("root"));
const hist = createBrowserHistory();
// root.render(
ReactDOM.render(
  <BrowserRouter history={hist}>
    <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      {/* <Route path="/vesselMoreInfo" render={(props) => <VesselMoreInfo {...props} />} /> */}
      <Redirect to="/login" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
// );
