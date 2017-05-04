import React from "react";

import Navbar from "./Navbar";

import CurrentLeader from "./PlayerView/CurrentLeader";
import PlayerStats from "./PlayerView/PlayerStats";

export default class LayoutPlayer extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container text-center">
          <CurrentLeader />
          <br />
          <PlayerStats />
          <br />
          <button type="button" class="btn btn-primary btn-lg btn-block">Round End</button>
          <button type="button" class="btn btn-warning btn-lg btn-block">See Standings</button>
          <button type="button" class="btn btn-warning btn-lg btn-block">See Scoreboard</button>
        </div>
      </div>
    );
  }
}
