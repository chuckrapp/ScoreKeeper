import React from "react";
import { Link } from "react-router";
import HistorySubRow from "./HistorySubRow";

export default class HistoryRow extends React.Component {
  render() {
    return (
      <div className="text-left bordered">
        <div className="media">
          <div className="media-left media-top">
            <a href="#">
              <img src="http://placehold.it/64" className="d-flex align-self-center mr-3" alt="Sample Image" />
            </a>
          </div>
          <div className="media-body">
            {/*hand I think will need to be a Store?*/}
            <h4 className="media-heading">Hand {this.props.hand}</h4>
              {/*below will have to be a loop through current players or look for changes to an array that
              the players push to when they update their score*/}
              <HistorySubRow name={"Chuck"} score={135} advanced={"is stuck on"} round={44} />
              <HistorySubRow name={"Alex"} score={23} advanced={"advanced to"} round={344} />
              <HistorySubRow name={"Vickie"} score={35} advanced={"advanced to"} round={334} />
              <HistorySubRow name={"Ward"} score={13} advanced={"advanced to"} round={333} />
          </div>
        </div>
      </div>
    );
  }
}
