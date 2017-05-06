import React from "react";
import { Link } from "react-router";

import Navbar from "../components/Navbar";

import CurrentLeader from "../components/PlayerView/CurrentLeader";
import PlayerStats from "../components/PlayerView/PlayerStats";

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
          <Link to=""><button type="button" className="btn btn-primary btn-lg btn-block btm-space">Round End</button></Link>
          <Link to="standings"><button type="button" className="btn btn-warning btn-lg btn-block btm-space">See Standings</button></Link>
          <Link to="history"><button type="button" className="btn btn-warning btn-lg btn-block btm-space">See History</button></Link>
          
        </div>
      </div>
    );
  }
}
