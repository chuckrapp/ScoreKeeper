import React from "react";
import { Link } from "react-router";

import Navbar from "../components/Navbar";

import CurrentLeader from "../components/PlayerView/CurrentLeader";
import PlayerStats from "../components/PlayerView/PlayerStats";


export default class LayoutPlayer extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container text-center">
          <CurrentLeader />
          <br />
          <PlayerStats />
          <br />
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <Link to=""><button type="button" className="btn btn-primary btn-lg btn-block btm-sm-space" data-toggle="modal" data-target="#exampleModal">Round End</button></Link>
              <div className="col-md-2"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <Link to="standings"><button type="button" className="btn btn-warning btn-lg btn-block btm-sm-space">See Standings</button></Link>
            </div>
            <div className="col-md-4">
              <Link to="history"><button type="button" className="btn btn-warning btn-lg btn-block btm-sm-space">See History</button></Link>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>


        
        {/*Modal*/}
        {/*<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Create Game!
              </button>*/}

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h1 className="modal-title text-center" id="modalLabel"><b>Round Over!</b></h1>

              </div>
              <div className="modal-body">

                <form>
                  <div className="form-group">
                    <h3>How many points are you adding?</h3>
                    <input type="text" className="form-control" id="udScore" placeholder='Ex. "19"' />
                  </div>
                  <div className="form-check">
                    <h3>Are you advancing?</h3>
                    <label className="form-check-label">
                      <input className="form-check-input" type="radio" name="udAdvance" id="advYes" value="option1" />
                      Movin' on up!!!'
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="radio" name="udAdvance" id="advNo" value="option2" />
                      Dang it, I got set!
                    </label>
                  </div>
                </form>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">Submit</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

{/*<script type='text/javascript' src='./../playerView.js'></script>*/ }
