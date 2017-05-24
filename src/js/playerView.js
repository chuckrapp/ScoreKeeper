
// import Axios from "axios";

// Server-side code (using body-parser middleware to parse json body):


// var bodyParser = require('body-parser')
// app.use(bodyParser.json());

// var score = $("#udScore").value;

$("#btnUpdateDB").on("click", function () {
  console.log("click!");
  var score = $("#udScore").value;
  var adv = 1;
  console.log(score);
  // axios.put("/updateScore", { score: score, adv: adv })
  //   .then(function (response) {
  //     console.log("Posted!")
  //   })
})


