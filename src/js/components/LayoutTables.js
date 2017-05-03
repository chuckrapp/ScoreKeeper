import React from "react";

import Navbar from "./Navbar";

import Tables from "./TablesView/Tables";

export default class LayoutTables extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Tables />
        </div>
      </div>
    );
  }
}
