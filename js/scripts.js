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

  $("form#contact-info").submit(function() {
    
    let username = $("input#name").val();
    let email = $("input#email").val();
    let message = $("input#message").val();
    
      if(username === ""){
        alert("Please enter your name in the respective field.");
      }
      else if (email === "") {
        alert("Please enter your email address in the respective field.");
      }
      else if (message === "") {
        alert("Please type your feedback/inquiry in the respective field.");
      } 
      else {
        alert("Thank you "+username+" for reaching out to us! We will get back to you as soon as possible.");
      }
      event.preventDefault();
  });
});
 
