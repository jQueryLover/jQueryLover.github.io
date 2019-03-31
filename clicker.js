// This creates a line break function so I can re-use it when I need to. Ironically this is reused from the first page.
var lineSpace = function(){
  var space = $("<p>")
    .html("<br> <br>")
    .appendTo("body")
};

var mainLink = $("<button>")
  .html("<a href = index.html> Go to the main page </a>")
  .appendTo("body")

var contactLink = $("<button>")
  .html("<a href = wheretofindme.html> Contact me! </a>")
  .appendTo("body")

var clickerLink  = $("<button>")
  .html("<a href = clicker.html> Go to my clicker game thingy.</a>")
  .appendTo("body")

var defaultCss = $("<button>")
  .text("Go back to the time where there were no styles...")
  .addClass("defaultButton")
  .appendTo("body")

$(".defaultButton").on("click", function() {

  $("body")
    .css("display", "block")
    .css("margin", "8px")
    .css("background-color", "initial")
    .css("color", "initial")
    .css("text-align", "initial")
    .css("font-size", "initial")
    .css("padding-top", "initial")
    .css("padding-bottom", "initial")
    .css("padding-left", "initial")
    .css("padding-right", "initial")

  $("p, h1, h2, h3, h4, h5, h6")
    .css("color", "initial")
    .css("font-family", "initial")

  $("a, .pageLink")
    .css("color", "blue")
    .css("font-family", "initial")

});

lineSpace();

// This creates the main header.
var jQueryClickerHeader = $("<h1>")
  .text("jQuery Clicker Game")
  .appendTo("body")

// This is a little note about the code here.
var codeWarning = $("<p>")
  .text("The clicker game is back in business! A jQuery update used to break the code, then I looked at the code again and spotted a mistake. Click away to your heart's content!")
  .appendTo("body")

// This creates the jQuery logo and sets it up for the game.
var jQueryClickerImage = $("<img>")
  .attr("src", "jqueryLogo.webp")
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
var numClicks = 0;

// This part edits the click counter.
$("#results").text("You clicked " + numClicks + " times");

// This is the function that makes jQuery do something when you click.
$("img").on("click", function() {

  numClicks += 1; // This changes the number of clicks by one every time you click.

  $("#results").text("You clicked " + numClicks + " times"); // This part edits the click counter. I have no idea why it's repeated, but
                                                             // I'm not taking any chances by deleting it.
});
