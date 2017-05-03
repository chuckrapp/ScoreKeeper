import React from "react";


export default class Card extends React.Component {
  render() {
    return (
      <div>
        <div className="col-lg-4">
          <div className="card">
            <img className="card-img-top" src="./img/open.jpg" alt="Card image cap" />
            <div className="card-block">
              <h4 className="card-title">{this.props.title}</h4>
              <p className="card-text">{this.props.desc}</p>
              <button className="btn btn-primary" type="button">Create</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
