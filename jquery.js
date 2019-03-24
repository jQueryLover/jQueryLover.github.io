// This creates a line break function so I can re-use it when I need to.
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

lineSpace();

// This creates a jQuery logo and adds all the required attributes.
var jQueryLogo = $("<img>")
  .attr("src", "jqueryLogo.png")
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
  .html("Want to look under the hood? Because this page is served by Github (jQueryLover.<strong>github.io</strong>), I naturally have a Github repository for this. Check it out! <a href = https://github.com/jQueryLover/jQueryLover.github.io class = pageLink> https://github.com/jQueryLover/jQueryLover.github.io </a>")
  .appendTo("body")

// This creates a line break.
lineSpace();

// This creates the second header in the page.
var aboutjQuery = $("<h2>")
  .text("But what is jQuery?")
  .appendTo("body")

// This creates a paragraph after the second header.
var aboutjQueryInfo = $("<p>")
  .html("jQuery is a JavaScript library that makes JavaScript better. <em> Way </em> better. What would be line after line of code can shortened down to a one simple line instead. If you don't know what JavaScript is, I really don't want to explain it now. <br>")
  .appendTo("body")

var jQueryWikipedia = $("<a>")
  .attr("href", "https://en.wikipedia.org/wiki/JQuery")
  .addClass("pageLink")
  .html("Here's a handy dandy Wikipedia page about jQuery. <br>")
  .appendTo("body")

var javascriptWikipedia = $("<a>")
  .attr("href", "https://en.wikipedia.org/wiki/JavaScript")
  .addClass("pageLink")
  .text("Here's another handy dandy Wikipedia page about JavaScript.")
  .appendTo("body")

// This creates a line break.
lineSpace();

var comingSoon = $("<h2>")
  .text("Something used to be here, but I've taken it down so I can work on it.")
  .appendTo("body")
