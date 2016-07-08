(function(module){
  var controllers = {};

  controllers.home = function(ctx, next){
    $('section').hide();
    $('#home').show();
    closeMenu();

    //update the active link color
    $( '.menu ul a' ).removeClass('active');
    $( 'a[href="/About-Me"]' ).addClass('active');
  };

  controllers.contact = function(ctx, next){
    $('section').hide();
    $('#contact').show();
    closeMenu();

    //update the active link color
    $( '.menu ul a' ).removeClass('active');
    $( 'a[href="/About-Me/contact"]' ).addClass('active');
  };

  controllers.interests = function(ctx, next){
    $('section').hide();
    $('#interests').show();
    closeMenu();

    //update the active link color
    $( '.menu ul a' ).removeClass('active');
    $( 'a[href="/About-Me/interests"]' ).addClass('active');
  };

  controllers.game = function(ctx, next){
    $('section').hide();
    $('#game').show();
    closeMenu();

    //update the active link color
    $( '.menu ul a' ).removeClass('active');
    $( 'a[href="/About-Me/game"]' ).addClass('active');
  };

  controllers.notFound = function(ctx, next){
    $('section').hide();
    $('#notFound').show();
    closeMenu();

    $( '.menu ul a' ).removeClass('active');
  };

  module.controllers = controllers;
})(window);
