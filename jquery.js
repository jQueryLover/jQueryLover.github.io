var jQueryLogo = $("<img>")
  .attr("src", "jquery-logo.png")
  .attr("width", "150")
  .attr("alt", "jQuery logo")
  .appendTo("body")

var mainHeader = $("<h1>")
  .text("Hello!")
  .appendTo("body")

var mainHeaderInfo = $("<p>")
  .html("This is a just a little test of a website that is fully ran by jQuery. When I say I like jQuery, I <em> really </em> like jQuery. <br> NOTE: All links on this page are white with underlines so don't expect any normal looking links.")
  .appendTo("body")

var lineSpace = $("<p>")
  .html("<br> <br>")
  .appendTo("body")

var pageLinks = $("<p>")
  .html("Here are some handy dandy page links: <br>")
  .appendTo("body")

var clickerPageLink = $("<a>")
  .text("Clicker game thing")
  .attr("href", "clicker.html")
  .appendTo("body")

var lineSpace = $("<p>")
  .html("<br> <br>")
  .appendTo("body")

var aboutjQuery = $("<h2>")
  .text("But what is jQuery?")
  .appendTo("body")

var aboutjQueryInfo = $("<p>")
  .html("jQuery is a JavaScript library that makes JavaScript better. For more infomation, visit <a href = https://google.com> this handy dandy Wikipedia page. </a>")
  .appendTo("body")

var lineSpace = $("<p>")
  .html("<br> <br>")
  .appendTo("body")

$("body").css("background-color", "rgb(66, 25, 106)")
$("body").css("color", "white")
$("body").css("font-family", "sans-serif")
$("a").css("color", "rgb(255, 255, 255)")
