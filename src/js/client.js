import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";


import LayoutHistory from "./layouts/LayoutHistory";
import LayoutPlayer from "./layouts/LayoutPlayer";
import LayoutScoreboard from "./layouts/LayoutScoreboard";
import LayoutStandings from "./layouts/LayoutStandings";
import LayoutTables from "./layouts/LayoutTables";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={LayoutTables} />
      <Route path="history" component={LayoutHistory}></Route>
      <Route path="player" component={LayoutPlayer}></Route>
      <Route path="scoreboard" component={LayoutScoreboard}></Route>
      <Route path="standings" component={LayoutStandings}></Route>
  </Router>,
  app);
