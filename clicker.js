var jQueryClickerHeader = $("<h1>")
  .text("jQuery Clicker Game")
  .appendTo("body")

var jQueryClickerImage = $("<img>")
  .attr("src", "jquery-logo.png")
  .attr("width", "300")
  .attr("alt", "jQuery logo")
  .css("cursor", "pointer")
  .appendTo("body")

var jQueryDiv = $("<div>")
  .attr("id", "results")

var jQueryClickerResult = $("<p>")
  .attr("id", "results")
  .appendTo("body")

var numClicks = 0;
$("#results").text("You clicked " + numClicks + " times");

$("#")

$("img").on("click", function() {
  numClicks += 1;
  $("#results").text("You clicked " + numClicks + " times");
});

$("body").css("background-color", "rgb(66, 25, 106)")
$("body").css("color", "white")
$("body").css("font-family", "sans-serif")
