alert('hello world');
console.log('hello world');
// Capture the form inputs
$("#submit").on("click", function () {


  var submission = {
    name: $("#name").val(),
    photo: $("#photo").val(),
    scores: [
      $("#q1").val(),
      $("#q2").val(),
      $("#q3").val(),
      $("#q4").val(),
      $("#q5").val(),
      $("#q6").val(),
      $("#q7").val(),
      $("#q8").val(),
      $("#q9").val(),
      $("#q10").val()
    ]
  };

  // AJAX post the data to the friends API.
  app.get('/api/friends', function (req, res) {
    res.send(submission);
  });

});