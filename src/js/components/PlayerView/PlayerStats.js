import React from "react";
// import Request from "superagent";
import Axios from "axios";

export default class PlayerStats extends React.Component {
  constructor(){
    super();
    this.state = {score: 0, round: 0}
  }

  componentWillMount() {
    var url = '/api/userStats';
    Axios.get(url).then((response) => {
      this.setState({
        score: response.data[0].user_score,
        round: response.data[0].round
      })
    }).catch((err) => {
      console.error(err)
    })
  }
  render() {
    return (
      <div>

        <div className="col-xs-6">
          <h4>Your Score</h4> {/*static info*/}
          <h1 id="userScore">{this.state.score}</h1> {/*info from database*/}
        </div>

        <div className="col-xs-6">
          <h4>Your Round</h4> {/*static info*/}
          <h1 id="userRound">{this.state.round}</h1> {/*info from database*/}
        </div>

      </div>
    );
  }
}
