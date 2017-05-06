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
                <th>#</th>
                <th>Name</th>
                <th>Level</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Alex</td>
                <td>334</td>
                <td>19</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Ward</td>
                <td>334</td>
                <td>41</td>
              </tr>
              
              <tr>
                <th scope="row">3</th>
                <td>Vickie</td>
                <td>334</td>
                <td>37</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Chuck</td>
                <td>44</td>
                <td>232</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
