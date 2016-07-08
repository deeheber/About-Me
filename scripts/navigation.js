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
