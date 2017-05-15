import React from "react";


export default class CurrentLeader extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-12">
          <h4>Current Leader</h4> {/*static info*/}
          <h2 id='currentLead'>LEADER HERE!</h2> {/*should be info from database*/}
        </div>
      </div>
    );
  }
}
{/*<script type='text/javascript' src='./js/playerView.js'></script>*/}