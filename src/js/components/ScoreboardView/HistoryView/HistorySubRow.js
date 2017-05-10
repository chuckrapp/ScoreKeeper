import React from "react";
import { Link } from "react-router";

export default class HistorySubRow extends React.Component {
  render() {
    return (
      <p>{this.props.name} added {this.props.score} to score and {this.props.advanced} {this.props.round}.</p>
    );
  }
}
