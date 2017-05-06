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
                  <li><a href="#">Login</a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Layouts <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="#/">Tables Menu</a></li>
                      <li><a href="#/player">Player Screen</a></li>
                      <li><a href="#/scoreboard">Scoreboard View</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#/standings">Standings Only</a></li>
                      <li><a href="#/history">History Only</a></li>
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
