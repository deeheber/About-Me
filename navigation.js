/*** initial page load ***/
$(document).ready(function() {
    //display the home section
    $('#home').show();
    //active link color on first menu item in the nav
    $('.menu li:first-child a').addClass('active');
});

/*** navigation open/close and events ***/
function openMenu(){
  $('.menu').fadeIn(500);
  $('.menu li').show();
  $('.cross').show();
  $('.hamburger').hide();
}

function closeMenu(){
  $('.menu li').hide();
  $('.menu').fadeOut(500);
  $('.hamburger').show();
  $('.cross').hide();
}

$('.cross').on('click', closeMenu);
$('.hamburger').on('click', openMenu);

$('.menu li a').on('click', function(event){
  event.preventDefault();

  $('section').hide();

  //display the selected section
  var clickedLinkName = $(this).data('link');
  $('section').each(function(index, el){
      var currentSection = $(this);
    if(currentSection.attr('id') == clickedLinkName){
      currentSection.show();
    }
  });

  //update active link color
  $('.menu li a').each(function(){
    $(this).removeClass('active');
  });
  $(this).addClass('active');

  closeMenu();
});
