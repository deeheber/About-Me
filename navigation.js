//active link color change
var pageURL = window.location.pathname;
pageURL = pageURL.replace(".html", "");
pageURL = pageURL.replace("/", "");
if(pageURL === "index"){
  pageURL = "home";
}

var navLinks = document.querySelectorAll(".menu li a");
for(var i=0; i<navLinks.length; i++){
  var currentNavLink = navLinks[i].textContent.toLowerCase();
  if(pageURL === currentNavLink){
    navLinks[i].classList.remove("active"); //for later when it's a SPA
    navLinks[i].classList.add("active");
  }
}
