import React from "react";
// import Request from "superagent";
import Axios from "axios";

export default class CurrentLeader extends React.Component {
  constructor(){
    super();
    this.state = {leader: "LEADER"}
  }
  
  componentWillMount() {
    var url = '/api/currentLeader';
    Axios.get(url).then((response) => {
      this.setState({
        leader: response.data[0]
      })
    }).catch((err) => {
      console.error(err)
    })
  }

  render() {
    return (
      <div>
        <div className="col-md-12">
          <h4>Current Leader</h4> {/*static info*/}
          <h2 id='currentLead'>{this.state.leader.username}</h2> {/*should be info from database*/}
          <h3 id="currentLeadStats">{this.state.leader.round} with {this.state.leader.user_score} points.</h3>
        </div>
      </div>
    );
  }
}