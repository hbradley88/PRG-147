$(document).ready(function(){
  
  $("#submit").click(function() {
    entry = $("#fname").val();
    entry = entry + " " + $("#lname").val();
    entry = entry + " " + "has a dog named " + $("#dname").val();
    entry = entry + " " + "who is a " + $("#dbreed").val();
    entry = entry + " " + "that is a " + $("#dsize").val() + " dog.<br>";
    $("#dogTypes").append(entry);
    $("#fname").val("");
    $("#lname").val("");
    $("#dname").val("");
    $("#dbreed").val("");
    $("#dsize").val("");
  });

  $("#lHeadline").click(function(){
    $("#dogHeadline").css({"color": "blue", "font-size": "72px"})
  });

  $("#sHeadline").click(function(){
    $("#dogHeadline").css({"color": "green", "font-size": "36px"})
  });

  $("#lmode").click(function(){
    $("#primary").removeClass("darkMode")
    $("#primary").addClass("lightMode")
  });

  $("#dmode").click(function(){
    $("#primary").addClass("darkMode")
    $("#primary").removeClass("lightMode")
  });

});