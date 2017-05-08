import React from "react";
import { Link } from "react-router";

import Navbar from "../components/Navbar";

import Standings from "../components/ScoreboardView/StandingsView/Standings";
import History from "../components/ScoreBoardView/HistoryView/History";

export default class LayoutPlayer extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-3">
            </div>
            <div className="col-lg-6">
              <Standings />
            </div>
            <div className="col-lg-3">
            </div>
          </div>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-3">
              <Link to="player"><button type="button" className="btn btn-warning btn-lg btn-block btm-space">Back</button></Link>
            </div>
            <div className="col-md-3">
              <Link to="history"><button type="button" className="btn btn-primary btn-lg btn-block btm-space">View History</button></Link>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>

    );
  }
}
