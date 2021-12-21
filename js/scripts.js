
// var tasks = ["design", "development", "product-management"];
// var descriptions = ["design-info", "development-info", "product-info"];
// var overlays = ["overlay1", "overlay2","overlay3","overlay4","overlay5","overlay6","overlay7","overlay8"];
// var projects = ["project1", "project2","project3","project4","project5","project6","project7","project8"];

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
  $("#overlay1").hover(function(){
    $("#project1").toggle();
  });
  $("#overlay2").hover(function(){
    $("#project2").toggle();
  });
  $("#overlay3").hover(function(){
    $("#project3").toggle();
  });
  $("#overlay4").hover(function(){
    $("#project4").toggle();
  });
  $("#overlay5").hover(function(){
    $("#project5").toggle();
  });
  $("#overlay6").hover(function(){
    $("#project6").toggle();
  });
  $("#overlay7").hover(function(){
    $("#project7").toggle();
  });
  $("#overlay8").hover(function(){
    $("#project8").toggle();
  });
});
 
