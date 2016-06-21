//navigation open/close
$('.open').on('click', function(){
  $('.menu').fadeIn(500);
  $('.menu li').show();
  $('.close').show();
  $('.open').hide();
});

$('.close').on('click', function(){
  $('.menu li').hide();
  $('.menu').fadeOut(500);
  $('.open').show();
  $('.close').hide();
});


//active link color change
var pageURL = window.location.pathname;
//Changed for the gh-pages branch since the URL is different on GH Pages
pageURL = pageURL.slice(10);
pageURL = pageURL.replace(".html", "");
if(pageURL === "index"){
  pageURL = "home";
}
//console.log(pageURL);

var navLinks = document.querySelectorAll(".menu li a");
for(var i=0; i<navLinks.length; i++){
  var currentNavLink = navLinks[i].textContent.toLowerCase();
  if(pageURL === currentNavLink){
    console.log(currentNavLink);
    navLinks[i].classList.add("active");
  }
}
