//initial page load
$(document).ready(function() {
    $('section').hide();
    $('#home').show();
});

//navigation open/close
$('.hamburger').on('click', function(){
  $('.menu').fadeIn(500);
  $('.menu li').show();
  $('.cross').show();
  $('.hamburger').hide();
});

$('.cross').on('click', function(){
  $('.menu li').hide();
  $('.menu').fadeOut(500);
  $('.hamburger').show();
  $('.cross').hide();
});

//navigation link events
$('.menu li a').on('click', function(event){
  event.preventDefault();

  $('section').hide();

  var clickedLink = $(this).data('link');

  $('section').each(function(index, el){
      var currentSection = $(this);
    if(currentSection.attr('id') == clickedLink){
      currentSection.show();
    }
  });
});


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
