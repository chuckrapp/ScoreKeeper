import React from "react";
import { Link } from "react-router";

export default class PlayerRow extends React.Component {
  render() {
    return (
      <tr>
        <th scope="row">1</th>
        <td>{this.props.name}</td>
        <td>{this.props.level}</td>
        <td>{this.props.score}</td>
      </tr>
    );
  }
}
