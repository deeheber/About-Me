(function(module){
  var controllers = {};

  controllers.home = function(ctx, next){
    console.log("home controller fired");
    $('section').hide();
    $('#home').show();
    closeMenu();

    //update the active link
  };

  controllers.contact = function(ctx, next){
    console.log("contact controller fired");
    $('section').hide();
    $('#contact').show();
    closeMenu();

    //update the active link
  };

  controllers.interests = function(ctx, next){
    console.log("interests controller fired");
    $('section').hide();
    $('#interests').show();
    closeMenu();

    //update the active link
  };

  controllers.game = function(ctx, next){
    console.log("game controller fired");
    $('section').hide();
    $('#game').show();
    closeMenu();

    //update the active link
  };

  controllers.notFound = function(ctx, next){
    console.log("notFound controller fired");
    $('section').hide();
    $('#notFound').show();
    closeMenu();
  };



  module.controllers = controllers;
})(window);
