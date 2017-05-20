import React from "react";

import Tables from "../components/TablesView/Tables";
import Navbar from "../components/Navbar";

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
