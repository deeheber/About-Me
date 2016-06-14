//active link color change
var pageURL = window.location.pathname;
//Changed for the gh-pages branch since the URL is different on GH Pages
pageURL = pageURL.slice(10);
pageURL = pageURL.replace(".html", "");
if(pageURL === "index"){
  pageURL = "home";
}
//console.log(pageURL);

var navLinks = document.querySelectorAll(".footerNav li a");
for(var i=0; i<navLinks.length; i++){
  var currentNavLink = navLinks[i].textContent.toLowerCase();
  if(pageURL === currentNavLink){
    console.log(currentNavLink);
    navLinks[i].classList.add("active");
  }
}
