import React from "react";

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
              <History />
            </div>
            <div className="col-lg-3">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
