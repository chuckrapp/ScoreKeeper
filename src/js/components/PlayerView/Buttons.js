import React from "react";


export default class Buttons extends React.Component {
  render() {
    return (
      <div>
        
        <button type="button" class="btn btn-primary btn-lg btn-block">Round End</button>
        <button type="button" class="btn btn-warning btn-lg btn-block">See Standings</button>
        <button type="button" class="btn btn-warning btn-lg btn-block">See Scoreboard</button>

      </div>
    );
  }
}
