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

lineSpace();

var title = $("<h1>")
  .html("So you want to contact me?")
  .appendTo("body")

var titleInfo = $("<p>")
  .text("If in the unlikely case that you want to talk to me about something, here are some ways to do so. Note that I'm not active all the time.")
  .appendTo("body")

// This creates a line space.
lineSpace();

// This creates a Discord logo and adds all the required attributes.
var discordLogo = $("<img>")
  .attr("src", "discordLogo.jpg")
  .attr("width", "150")
  .attr("alt", "Discord logo")
  .appendTo("body")

var discordHeading = $("<h2>")
  .text("Contact me on Discord!")
  .appendTo("body")

var discordInfo = $("<p>")
  .text("You can either message me directly or join one of my servers.")
  .appendTo("body")

// This creates a line space.
lineSpace();

var discordServers = $("<h2>")
  .text("Discord server links")
  .appendTo("body")

var discordServerInfo = $("<p>")
  .html("Here are a collection of server links that you may join. <br>")
  .appendTo("body")

var computerClan = $("<a>")
  .attr("href", "https://discordapp.com/invite/nTazaMT")
  .addClass("pageLink")
  .html("My new Discord server called Computer Clan. <br>")
  .appendTo("body")

var tPoseClub = $("<a>")
  .attr("href", "https://discordapp.com/invite/bZE897Q")
  .addClass("pageLink")
  .html("My friend's Discord server called T-Pose Club, mainly about the Fortnite emote T-Pose. <br>")
  .appendTo("body")
