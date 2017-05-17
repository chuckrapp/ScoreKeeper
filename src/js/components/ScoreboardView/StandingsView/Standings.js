import React from "react";
import PlayerRow from "./PlayerRow";
import Axios from "axios";
var currentStandings = [];

export default class Standings extends React.Component {
  constructor() {
    super();
    this.state = { standings: [] }
  }

  componentWillMount() {
    var url = '/api/standings';
    Axios.get(url).then((response) => {
      currentStandings = response.data;
      this.setState({
      })

    }).catch((err) => {
      console.error(err)
    })
  }

  render() {

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h2>Standings</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Level</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {currentStandings.map((player, index) => {
                  return <PlayerRow key={index} standing={index} name={player.username} level={player.round} score={player.user_score} />
                })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

// })

