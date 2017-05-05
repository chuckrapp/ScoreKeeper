import React from "react";


export default class Standings extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-12">
          <h2>Standings</h2> 
          <table className="table">
            <thead>
              <tr>
                <th align="center">#</th>
                <th align="center">Name</th>
                <th align="center">Level</th>
                <th align="center">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Vickie</td>
                <td>444</td>
                <td>51</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Alex</td>
                <td>334</td>
                <td>73</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Ward</td>
                <td>333</td>
                <td>135</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Chuck</td>
                <td>44</td>
                <td>322</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
