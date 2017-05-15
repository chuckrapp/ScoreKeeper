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
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <Link to=""><button type="button" className="btn btn-primary btn-lg btn-block btm-sm-space">Round End</button></Link>
              <div className="col-md-2"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <Link to="standings"><button type="button" className="btn btn-warning btn-lg btn-block btm-sm-space">See Standings</button></Link>
            </div>
            <div className="col-md-4">
              <Link to="history"><button type="button" className="btn btn-warning btn-lg btn-block btm-sm-space">See History</button></Link>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    );
  }
}
{/*<script type='text/javascript' src='./../playerView.js'></script>*/}
