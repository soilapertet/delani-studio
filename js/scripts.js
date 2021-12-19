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
})