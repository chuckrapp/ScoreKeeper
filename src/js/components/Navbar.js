import React from "react";


export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
                <a className="navbar-brand" href="#/">Home</a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  {/*<li><a href="#">Login</a></li>*/}
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">USER NAME <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="#/">Login</a></li>
                      <li><a href="#/">Logout</a></li>
                      <li><a href="#/">Leave Table (Quit game)</a></li>
                      <li><a href="#/">Settings</a></li>
                      <li><a href="#/">View Past Games</a></li>
                      <li role="separator" className="divider"><hr /></li>
                      <li><a href="#/player">Player View</a></li>
                      <li><a href="#/scoreboard">Scoreboard View</a></li>
                    </ul>
                  </li>
                </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
