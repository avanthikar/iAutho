import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

// core components
import Admin from "layouts/Admin.jsx";
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import Login from "layouts/App.jsx";
import SignInForm from "layouts/SignInForm.jsx";
import SignUpForm from "layouts/SignUpForm.jsx";
import Settings from "layouts/settings.jsx";
import Home from "layouts/HomePage.jsx";
import About from "layouts/About.jsx";

import "assets/css/material-dashboard-react.css?v=1.6.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/signIn" component={SignInForm} />
      <Route path="/signUp" component={SignUpForm} />
      {/* <Route path="/about" component={About} /> */}
      {/* <Route path="/settings" component={Settings} />
      
       */}
      
      {/* <Redirect from="/" to="/admin/dashboard" /> */}
      <Redirect from="/" to="/home" /> 
      {/* <Redirect from="/" to="/signUp" /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
