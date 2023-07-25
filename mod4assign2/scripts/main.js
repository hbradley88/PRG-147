$(document).ready(function(){
  $("#baxterHide").click(function(){
    $("#baxter").hide();
  });

  $("#baxterShow").click(function(){
    $("#baxter").show();
  });

  $("#bayleeFadeIn").click(function(){
      $("#baylee").fadeIn("slow");
  });

  $("#bayleeFadeOut").click(function(){
    $("#baylee").fadeOut(2000);
  });

  $("#bellaSlide").click(function(){
      $("#bella").slideToggle("slow");
  });
});

