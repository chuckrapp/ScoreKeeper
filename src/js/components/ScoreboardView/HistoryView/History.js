import React from "react";


export default class History extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-12">
          <h4>Current Leader</h4> {/*static info*/}
          <h2>Chuck</h2> {/*info from database*/}
        </div>
      </div>
    );
  }
}
