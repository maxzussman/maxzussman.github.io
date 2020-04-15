$(document).ready(function() {
  console.log("we loaded");

  let titleClicked = false;
  console.log(titleClicked);
  $("#title").click(function() {
    console.log(titleClicked);
    if (titleClicked == false) {
      //what happens if title hasnt been clicked yet?
      //chnge title
      $("#title").html("A Dam Fine Potato Kugel");
      titleClicked = true;
    } else if (titleClicked == true) {
      $("#title").html("Potato Kugel, the Right Way");
      titleClicked = false;
    }
  });

  $("#p1").mouseover(function() {
    $("#p1")
      .css("font-size", "20px")
  });
  $("#p1").mouseleave(function() {
    $("#p1").css("font-size", "16px");
  });
  $("#p2").mouseover(function() {
    $("#p2")
      .css("font-size", "20px")
  });
  $("#p2").mouseleave(function() {
    $("#p2").css("font-size", "16px");
  });
  $("#p3")
    .mouseover(function() {
      $("#p3")
        .css("font-size", "20px")
    });
  $("#p3").mouseleave(function() {
    $("#p3").css("font-size", "16px");
  });
  $("#p4")
    .mouseover(function() {
      $("#p4")
        .css("font-size", "20px")
    });
  $("#p4").mouseleave(function() {
    $("#p4").css("font-size", "16px");
  });
  $("#p5")
    .mouseover(function() {
      $("#p5")
        .css("font-size", "20px")
    });
  $("#p5").mouseleave(function() {
    $("#p5").css("font-size", "16px");
  });
  $("#p6")
    .mouseover(function() {
      $("#p6")
        .css("font-size", "20px")
    });
  $("#p6").mouseleave(function() {
    $("#p6").css("font-size", "16px");
  });
  $("#p7")
    .mouseover(function() {
      $("#p7")
        .css("font-size", "20px")
    });
  $("#p7").mouseleave(function() {
    $("#p7").css("font-size", "16px");
  });
});
