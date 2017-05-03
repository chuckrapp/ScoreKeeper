import React from "react";

import Card from "./Card";

export default class Tables extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">


            <div className="container">
              <div className="row text-center">
                <h1>Choose a Table!</h1>
                <h4>Choose a table to join, or select an empty table to start a new game!</h4>
                <hr />
              </div>
            </div>

            <div className="row">
              <div className="card-deck text-center">
                <Card title={"334"} desc={"A contract rummy game with 7 stages!"} />
                <Card title={"Munchkin"} desc={"A fun game where you kick down doors and fight monsters!"} />
                <Card title={"Open"} desc={'This table is open! Click "Create" to start a new game!'} />
              </div>
            </div>

            <div className="row">
              <div className="card-deck text-center">
                <Card title={"Open"} desc={'This table is open! Click "Create" to start a new game!'} />
                <Card title={"Open"} desc={'This table is open! Click "Create" to start a new game!'} />
                <Card title={"Open"} desc={'This table is open! Click "Create" to start a new game!'} />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

