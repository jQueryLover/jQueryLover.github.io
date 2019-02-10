var lineSpace = function(){
  var space = $("<p>")
    .html("<br> <br>")
    .appendTo("body")
};

// This creates a jQuery logo and adds all the required attributes.
var jQueryLogo = $("<img>")
  .attr("src", "jquery-logo.png")
  .attr("width", "150")
  .attr("alt", "jQuery logo")
  .appendTo("body")

// This creates the main header.
var mainHeader = $("<h1>")
  .text("Hello!")
  .appendTo("body")

// This creates the paragraph after the main header.
var mainHeaderInfo = $("<p>")
  .html("This is a just a little test of a website that is fully ran by jQuery. When I say I like jQuery, I <em> really </em> like jQuery. <br> NOTE: All links on this page are white with underlines so don't expect any normal looking links.")
  .appendTo("body")

// This creates a paragraph about Github.
var aboutGithub = $("<p>")
  // .html("<i class="fab fa-github"></i> Want to look under the hood? Because this page is served by Github (jQueryLover.<strong>github.io</strong>), I naturally have a Github repository for this. Check it out! https://github.com/jQueryLover/jQueryLover.github.io")
  .html("Want to look under the hood? Because this page is served by Github (jQueryLover.<strong>github.io</strong>), I naturally have a Github repository for this. Check it out! https://github.com/jQueryLover/jQueryLover.github.io")
  .appendTo("body")

// This creates a line break.
lineSpace();

// This creates a paragraph with lots of useful links.
var pageLinks = $("<p>")
  .html("Here are some handy dandy page links: <br>")
  .appendTo("body")

// This is a link to my little clicker game. I don't have any plans to improve it.
var clickerPageLink = $("<a>")
  .text("Clicker game thing")
  .attr("href", "clicker.html")
  .appendTo("body")

// This creates a line break.
lineSpace();

// This creates the second header in the page.
var aboutjQuery = $("<h2>")
  .text("But what is jQuery?")
  .appendTo("body")

// This creates a paragraph after the second header.
var aboutjQueryInfo = $("<p>")
  .html("jQuery is a JavaScript library that makes JavaScript better. For more infomation, <a href = https://google.com> visit this handy dandy Wikipedia page. </a>")
  .appendTo("body")

// This creates a line break.
lineSpace();

// This creates a header with a part so I can explain a bit more about me.
var aboutMeHeader = $("<h2>")
  .text("Wait, who are you?")
  .appendTo("body")

// This part contains all the CSS styles used.
$("body").css("background-color", "rgb(66, 25, 106)")
$("body").css("color", "white")
$("body").css("font-family", "sans-serif")
$("a").css("color", "rgb(255, 255, 255)")
