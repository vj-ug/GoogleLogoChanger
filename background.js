var oldLogo = chrome.extension.getURL("old-logo.svg");
var navoldLogo = chrome.extension.getURL("old_nav_logo.png");
 
console.log(navLogoUrl);
 
// homepage logo
var logo = document.getElementById("hplogo");
 
//thumbnail logo
var thumbLogo = document.getElementById("logo");
 
//changing homepage
if (logo) {
    if (logo.tagName == "IMG") {
        logo.src = oldLogo;
    } else {
        document.getElementById("hplogo")
            .style.backgroundImage = "url(" + oldLogo + ")";
    }
}
 
thumbLogo.childNodes[0].src = navoldLogo;

// GOOOOOOOOOOOOOOOOOGLE logo
var navEnd = document.querySelectorAll(".csb");
 
for (var i = 0; i < navEnd.length; i++) {
    navEnd[i].style.backgroundImage = "url(" + oldnavLogo + ")";
}
