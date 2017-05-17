import React from "react";
import { Link } from "react-router";

export default class Card extends React.Component {
  render() {
    return (
      <div>
        <div className="col-lg-4">
          <div className="card">
            <img className="card-img-top" src={"./img/" + this.props.title + ".jpg"} alt="Card image cap" />
            <div className="card-block">
              <h4 className="card-title">{this.props.title}</h4>
              <p className="card-text">{this.props.desc}</p>
              {/*<button id="btnNewTable" className="btn btn-primary" type="button">Create</button>*/}



              {/*Modal*/}
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Create Game!
              </button>

              <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Game Settings</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">

                      <form>
                        <div className="form-group">
                          {/*<label for="formGroupExampleInput">What game are you playing?</label>*/}
                          <select className="form-control form-control-lg">
                            <option defaultValue>Choose a game</option>
                            <option value="1">334</option>
                            <option value="2">Coming Soon</option>
                            <option value="3">Coming Soon</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label for="formGroupExampleInput2">Enter number of players</label>
                          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="" />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                      <button type="button" className="btn btn-primary">Create!</button>
                    </div>
                  </div>

                </div>
              </div>
              {/*<Link to="player" className="btn btn-primary" type="button">Create</Link>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
