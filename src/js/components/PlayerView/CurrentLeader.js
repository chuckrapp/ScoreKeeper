import React from "react";
import Request from "superagent";

export default class CurrentLeader extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  componentWillMount() {
    var url = 'localhost:1337/api/currentLeader';
    Request.get(url).then((response) => {
      this.setState({
        leader: response
      })
    })
  }

  render() {
    return (
      <div>
        <div className="col-md-12">
          <h4>Current Leader</h4> {/*static info*/}
          <h2 id='currentLead'>{this.state.leader}</h2> {/*should be info from database*/}
        </div>
      </div>
    );
  }
}
{/*<script type='text/javascript' src='./js/playerView.js'></script>*/}