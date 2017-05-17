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
        leader: response.data
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
          <h2 id='currentLead'>{this.state.leader}</h2> {/*should be info from database*/}
        </div>
      </div>
    );
  }
}