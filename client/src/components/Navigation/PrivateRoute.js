import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from '../Home';
import history from './history';
import Landing from "../Landing";
import MLS from "../MLS";
import NFL from "../NFL";
import NBA from "../NBA";
import NHL from "../NHL";
import MLB from "../MLB";
import EPL from "../epl";

export default function PrivateRoute({
  //authenticated,
  //...rest
}) {
  return (

    <Router history={history}>
      <Switch>
        <Route path="/Home" exact component={Home} />
        <Route path="/NFL" exact component={NFL} />
        <Route path="/NBA" exact component={NBA} />
        <Route path="/NHL" exact component={NHL} />
        <Route path="/MLS" exact component={MLS} />
        <Route path="/MLB" exact component={MLB} />
        <Route path="/EPL" exact component={EPL} />



      </Switch>
    </Router>
  );
}