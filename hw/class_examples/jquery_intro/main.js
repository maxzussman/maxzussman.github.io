$(document)
  .ready(function() {
    console.log("we loaded");

    $("#button1")
      .click(function() {

        //Code that runs when you click on the page that has id=title//
        // $("#title").css("color", "#bada55"); $("#title").css("font-size", "500px");
        $("#title")
          .addClass("big-text");
      });

    $("#button2")
      .click(function() {
        $("#title").removeClass("big-text");
      });
    $("p")
      .mouseover(function() {
        $("p")
          .css("font-size", "21px")
        $("p").css("background-color", "yellow");
      });
    $("p").mouseleave(function() {
      $("p").css("font-size", "16px");
      $("p").css("background-color", "white");
    });
    $("#box").mousedown(function() {
      $("#box").css("background-color", "green");
    });
    $("#box").mouseup(function() {
      $("#box").css("background-color", "red");
    });
  });
