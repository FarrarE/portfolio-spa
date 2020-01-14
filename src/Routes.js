import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/index";
import About from "./containers/About/index";
import Projects from "./containers/Projects/index";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/projects" exact component={Projects} />
    </Switch>
  );
}