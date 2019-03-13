// This loads a custom Google font. Thanks to Archer from Stack Overflow!
function addGoogleFont(FontName) {
    $("head").append("<link href='https://fonts.googleapis.com/css?family=" + FontName + "' rel='stylesheet' type='text/css'>");
}

// This adds the heading font.
addGoogleFont("Special+Elite");

// This adds the body font.
addGoogleFont("Oswald");

// This sets the background colour to a nice dark green colour.
$("body").css("background-color", "rgb(21, 124, 31)")

// This sets the text colour to white.
$("body").css("color", "white")

// This sets the heading font to the cool font named Special Elite.
$("h1, h2, h3, h4, h5, h6").css("font-family", "'Special Elite', 'serif'")

// This sets the paragraph font to the font named Oswald.
$("p, a").css("font-family", "'Oswald', 'sans-serif'")

// This makes the page font a bit bigger so we can fully appreciate these fonts.
$("body").css("font-size", "19px")

// This changes the link colour to white to match the text colour.
$("a").css("color", "rgb(255, 255, 255)")
