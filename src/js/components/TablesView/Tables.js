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
            {/*Titles and Descriptions will populate from the DOM create table Modal*/}
            <div className="row btm-lg-space">
              <div className="card-deck text-center">
                <Card key={1} title={"334"} desc={"A contract rummy game with 7 stages!"} /> {/*game from game setup modal but description from database*/}
                <Card key={2} title={"334"} desc={"A contract rummy game with 7 stages!"} />
                <Card key={3} title={"Open"} desc={'This table is open! Click "Create" to start a new game!'} />
              </div>
            </div>


            <div className="row">
              <div className="card-deck text-center">
                <Card key={4} title={"Open"} desc={'This table is open! Click "Create" to start a new game!'} />
                <Card key={5} title={"Open"} desc={'This table is open! Click "Create" to start a new game!'} />
                <Card key={6} title={"Open"} desc={'This table is open! Click "Create" to start a new game!'} />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

