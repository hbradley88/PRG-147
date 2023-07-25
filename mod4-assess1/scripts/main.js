$(document).ready(function(){

  $("#royalUp").click(function(){
    $("#royal").animate({
      marginTop: '-=10px',
    });
  });

  $("#royalDown").click(function(){
    $("#royal").animate({
      marginTop: '+=10px',
    });
  });

  $("#royalLeft").click(function(){
    $("#royal").animate({
      marginLeft: '-=10px',
    });
  });

  $("#royalRight").click(function(){
    $("#royal").animate({
      marginLeft: '+=10px',
    });
  });
  
  $("#baxterMove").click(function(){
    $("#baxter").animate({
      right: '250px',
      opacity: '0.5',
      height: '300px',
      width: '300px'
    });
  });

  $("#bellaSlide").click(function(){
    $("#bella").slideToggle(5000);
  });

  $("#bellaStop").click(function(){
    $("#bella").stop();
  });

  $("#bayleeFadeIn").click(function(){
    $("#baylee").fadeIn("slow");
  });

  $("#bayleeFadeOut").click(function(){
    $("#baylee").fadeOut(2000, function(){
      alert("The image is now hidden");
    });
  });

  $("textChange").click(function(){
    $("#royalDogs").css("color", "purple")
      .css("font-size", "large")
      .slideUp(2000)
      .slideDown(2000);
  });

});