import React from "react";


export default class History extends React.Component {
  render() {
    return (
      <div className="col-md-12">
        <h2>History</h2>
        <div className="scrollBox">

          <div className="text-left bordered">
            <div className="media">
              <div className="media-left media-middle">
                <a href="#">
                  <img src="http://placehold.it/64" className="d-flex align-self-center mr-3" alt="Sample Image" />
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">Round 4</h4>
                <p>Vickie added 0 to score and advanced to 334.</p>
                <p>Chuck added 98 to score and is staying on 44.</p>
                <p>Ward added 9 to score and advanced to 334.</p>
                <p>Alex added 16 to score and advanced to 334.</p>
              </div>
            </div>
          </div>

          <div className="text-left bordered">
            <div className="media">
              <div className="media-left media-middle">
                <a href="#">
                  <img src="http://placehold.it/64" className="d-flex align-self-center mr-3" alt="Sample Image" />
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">Round 3</h4>
                <p>Vickie added 15 to score and advanced to 333.</p>
                <p>Chuck added 117 to score and is staying on 44.</p>
                <p>Ward added 7 to score and advanced to 333.</p>
                <p>Alex added 0 to score and advanced to 333.</p>
              </div>
            </div>
          </div>

          <div className="text-left bordered">
            <div className="media">
              <div className="media-left media-middle">
                <a href="#">
                  <img src="http://placehold.it/64" className="d-flex align-self-center mr-3" alt="Sample Image" />
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">Round 2</h4>
                <p>Chuck added 0 to score and advanced to 44.</p>
                <p>Ward added 8 to score and advanced to 44.</p>
                <p>Alex added 3 to score and advanced to 44.</p>
                <p>Vickie added 12 to score and advanced to 44.</p>
              </div>
            </div>
          </div>

          <div className="text-left bordered">
            <div className="media">
              <div className="media-left media-middle">
                <a href="#">
                  <img src="http://placehold.it/64" className="d-flex align-self-center mr-3" alt="Sample Image" />
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">Round 1</h4>
                <p>Alex added 0 to score and advanced to 34.</p>
                <p>Vickie added 10 to score and advanced to 34.</p>
                <p>Ward added 17 to score and advanced to 34.</p>
                <p>Chuck added 5 to score and advanced to 34.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
