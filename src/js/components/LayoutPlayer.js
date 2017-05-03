import React from "react";

import Navbar from "./Navbar";

import CurrentLeader from "./PlayerView/CurrentLeader";
import PlayerStats from "./PlayerView/PlayerStats";
import Buttons from "./PlayerView/Buttons";

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
          <Buttons />
        </div>
      </div>
    );
  }
}
