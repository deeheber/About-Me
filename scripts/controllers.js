(function(module){
  var controllers = {};

  controllers.home = function(ctx, next){
    console.log("home controller fired");
    $('#home').show();
  };



  module.controllers = controllers;
})(window);
