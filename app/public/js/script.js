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

  // needs logic to send values to array from survey page
  // needs logic to return closest match in friends data
  // needs code to send data to friends data
  // needs code to innitiate modal

});