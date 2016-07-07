(function(module){
  var controllers = {};

  controllers.home = function(ctx, next){
    $('section').hide();
    $('#home').show();
    closeMenu();

    //update the active link color
    $( '.menu ul a' ).removeClass('active');
    $( 'a[href="/"]' ).addClass('active');
  };

  controllers.contact = function(ctx, next){
    $('section').hide();
    $('#contact').show();
    closeMenu();

    //update the active link color
    $( '.menu ul a' ).removeClass('active');
    $( 'a[href="/contact"]' ).addClass('active');
  };

  controllers.interests = function(ctx, next){
    $('section').hide();
    $('#interests').show();
    closeMenu();

    //update the active link color
    $( '.menu ul a' ).removeClass('active');
    $( 'a[href="/interests"]' ).addClass('active');
  };

  controllers.game = function(ctx, next){
    $('section').hide();
    $('#game').show();
    closeMenu();

    //update the active link color
    $( '.menu ul a' ).removeClass('active');
    $( 'a[href="/game"]' ).addClass('active');
  };

  controllers.notFound = function(ctx, next){
    $('section').hide();
    $('#notFound').show();
    closeMenu();

    $( '.menu ul a' ).removeClass('active');
  };

  module.controllers = controllers;
})(window);
