import React from "react";
import { Link } from "react-router";

export default class Card extends React.Component {
  showModal() {
    console.log("clicked");
  }
  render() {
    return (
      <div>
        <div className="col-lg-4">
          <div className="card">
            <img className="card-img-top" src="./img/334.jpg" alt="Card image cap" />
            <div className="card-block">
              <h4 className="card-title">{this.props.title}</h4>
              <p className="card-text">{this.props.desc}</p>
              <button id="btnNewTable" className="btn btn-primary" type="button" onClick={this.showModal.bind(this)}>Create</button>
              {/*<Link to="player" className="btn btn-primary" type="button">Create</Link>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
