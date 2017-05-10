import React from "react";
import HistoryRow from "./HistoryRow";

export default class History extends React.Component {
  render() {
    return (
      <div className="col-md-12">
        <h2>History</h2>
        <div className="scrollBox">
          {/*hand I think will need to be a Store?*/}
          <HistoryRow hand={4} />
          <HistoryRow hand={3} />
          <HistoryRow hand={2} />
          <HistoryRow hand={1} />



        </div>
      </div>
    );
  }
}
