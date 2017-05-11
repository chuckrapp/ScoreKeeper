import React from "react";
import PlayerRow from "./PlayerRow";

// connection.query("SELECT users.username FROM users INNER JOIN games ON users.id = games.user_id WHERE users.id = '1'", function (err, results) {
//   if (err) throw err;
//   // console.log(results[0].username)

  export default class Standings extends React.Component {
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
                  {/******TO DO******/}
                  {/*Add a loop here for each player found at table*/}
                  <PlayerRow name={"Chuck"} level={"44"} score={"152"} />


                  {/*<PlayerRow name={"Alex"} level={"334"} score={"15"}/>
                <PlayerRow name={"Vickie"} level={"334"} score={"41"}/>
                <PlayerRow name={"Ward"} level={"333"} score={"95"}/>*/}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }

// })

