console.log('test');
$.get("/api/currentLeader", function(data) {

console.log("hello");

     $("#currentLead").text(data);

});