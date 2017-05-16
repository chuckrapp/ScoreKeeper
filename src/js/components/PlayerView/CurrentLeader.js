import React from "react";
import Axios from "axios";

export default class CurrentLeader extends React.Component {
  componentWillMount() {
    axios.get('/user?ID=12345')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
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
{/*<script type='text/javascript' src='./js/playerView.js'></script>*/ }