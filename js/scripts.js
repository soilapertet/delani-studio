
var tasks = ["design", "development", "product-management"];
var descriptions = ["design-info", "development-info", "product-info"];

$(document).ready(function(){
  $("#design").click(function(){
    $("#design").slideToggle();
    $("#design-info").slideToggle();
  });
  $("#design-info").click(function(){
    $("#design-info").slideToggle();
    $("#design").slideToggle();
  });
  $("#development").click(function(){
    $("#development").slideToggle();
    $("#development-info").slideToggle();
  });
  $("#development-info").click(function(){
    $("#development-info").slideToggle();
    $("#development").slideToggle();
  });
  $("#product-management").click(function(){
    $("#product-management").slideToggle();
    $("#product-info").slideToggle();
  });
  $("#product-info").click(function(){
    $("#product-info").slideToggle();
    $("#product-management").slideToggle();
  });
});

