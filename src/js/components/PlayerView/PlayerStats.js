import React from "react";


export default class PlayerStats extends React.Component {
  render() {
    return (
      <div>
        
        <div className="col-xs-6">
          <h4>Your Score</h4> {/*static info*/}
          <h1>323</h1> {/*info from database*/}
        </div>

        <div className="col-xs-6">
          <h4>Your Round</h4> {/*static info*/}
          <h1>44</h1> {/*info from database*/}
        </div>

      </div>
    );
  }
}
