import React from "react";

import Navbar from "./Navbar";

import Standings from "./ScoreboardView/StandingsView/Standings";
import History from "./ScoreBoardView/HistoryView/History";

export default class LayoutPlayer extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-6">
              <Standings />
            </div>
            <div className="col-lg-6">
              <History />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
