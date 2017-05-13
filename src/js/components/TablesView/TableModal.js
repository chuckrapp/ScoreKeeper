import React from "react";


export default class TableModal extends React.Component {
  render() {
    $("#reactModal").modal("toggle");
    return (
      <div className="modal" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Modal</h2>
        </div>
        <div className="modal-body">
          <p>testestetstestetstdewfew fewfewfew fewfew</p>
        </div>
      </div>
    </div>
  </div>
    );
  }
}
// container and presenters components in react
// https://scotch.io/tutorials/speed-up-your-restful-api-development-in-node-js-with-swagger
// https://visionmedia.github.io/superagent/
// swagger