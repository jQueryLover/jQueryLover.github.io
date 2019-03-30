// This loads a custom Google font. Thanks to Archer from Stack Overflow!
function addGoogleFont(FontName) {
    $("head").append("<link href='https://fonts.googleapis.com/css?family=" + FontName + "' rel='stylesheet' type='text/css'>");
}

// This adds the heading font.
addGoogleFont("Special+Elite");

// This adds the body font.
addGoogleFont("Oswald");

$("body")
  .css("background-color", "rgb(135, 88, 18)") // Alt - Ctrl - C is the keyboard shortcut for color picker
  .css("color", "white")
  .css("font-size", "19px")
  .css("text-align", "center")
  .css("padding-top", "10px")
  .css("padding-bottom", "10px")
  .css("padding-left", "50px")
  .css("padding-right", "50px")

// This sets the heading font to the cool font named Special Elite.
$("h1, h2, h3, h4, h5, h6")
  .css("font-family", "'Special Elite', 'serif'")

// This sets the paragraph font to the font named Oswald.
$("p, .pageLink")
  .css("font-family", "'Oswald', 'sans-serif'")
  .css("color", "white")

$(".defaultButton").css("cursor", "pointer")
