//active link color change
var pageURL = window.location.pathname;
pageURL = pageURL.replace(".html", "");
pageURL = pageURL.replace("/About-me/", "");
if(pageURL === "index"){
  pageURL = "home";
}
console.log(pageURL);

var navLinks = document.querySelectorAll(".footerNav li a");
for(var i=0; i<navLinks.length; i++){
  var currentNavLink = navLinks[i].textContent.toLowerCase();
  if(pageURL === currentNavLink){
    console.log(currentNavLink);
    navLinks[i].classList.add("active");
  }
}
