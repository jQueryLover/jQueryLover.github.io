var mainLink = $("<a>")
  .attr("href", "index.html")
  .text("Back to main page -")
  .appendTo("body")

var contactLink = $("<a>")
  .attr("href", "wheretofindme.html")
  .text(" To contact page")
  .appendTo("body")

// This creates the main header.
var jQueryClickerHeader = $("<h1>")
  .text("jQuery Clicker Game")
  .appendTo("body")

// This creates the jQuery logo and sets it up for the game.
var jQueryClickerImage = $("<img>")
  .attr("src", "jqueryLogo.png")
  .attr("width", "300")
  .attr("alt", "jQuery logo")
  .css("cursor", "pointer")
  .appendTo("body")

// This creates a place for the click counter.
var jQueryDiv = $("<div>")
  .attr("id", "results")

// This is the click counter. It is edited using jQuery, of course.
var jQueryClickerResult = $("<p>")
  .attr("id", "results")
  .appendTo("body")

// This resets the number of clicks to 0.
var numClicks = 0

// This part edits the click counter.
$("#results").text("You clicked " + numClicks + " times");

// To be honest, I have no idea why this is here. I just copy pasted some old code that I made a long time ago.
$("#")

// This is the function that makes jQuery do something when you click.
$("img").on("click", function() {

  numClicks += 1; // This changes the number of clicks by one every time you click.

  $("#results").text("You clicked " + numClicks + " times"); // This part edits the click counter. I have no idea why it's repeated, but
                                                             // I'm not taking any chances by deleting it.
});
