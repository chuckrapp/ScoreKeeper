import React from "react";


export default class PlayerStats extends React.Component {
  render() {
    return (
      <div>
        
        <div className="col-xs-6">
          <h4>Your Score</h4>
          <h1>245</h1>
        </div>

        <div className="col-xs-6">
          <h4>Your Round</h4>
          <h1>44</h1>
        </div>

      </div>
    );
  }
}
