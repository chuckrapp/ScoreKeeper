import React from "react";

import Navbar from "../components/Navbar";

import Tables from "../components/TablesView/Tables";

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
