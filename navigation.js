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

//navigation links
  //grab .menu li
  //on click
    //prevent default
    //hide all sections
    //pull the data
    //show the section id that matches the data


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
