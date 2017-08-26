$("body").append(
  "<div class='buttons'><button onclick='reset(); return false;'>Reset</button>" +
  "<button onclick='clearance(); return false;'>Clear</button>" +
  "<button onclick='rainbow(); return false;'>Rainbow</button>" +
  "<button onclick='classic(); return false;'>Classic</button>" +
  "<button onclick='bonus(); return false;'>Bonus</button></div>" +
  "<div class='wrapper'><img src='images/rv.png'></div>"
);
$(".wrapper").append(  "<table></table>");
defaultGrid(10);

function rainbow(){
  $(".square").hover(function(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = "rgb(" + r + ", " + g+ ", " + b + ")";
    $(this).css({
      "background-color" : color
    });
  });
}

function bonus(){
  $(".square").hover(function(){
    $(this).css({
      "background-color" : "rgba(0, 0, 0, 0.0)"
    });
  });
}

function classic() {
  $(".square").hover(function(){
    var y = 0;
    var color = "rgb(" + y + ", " + y + ", " + y + ")";
    $(this).css({
      "visibility" : "visible",
      "background-color" : color
    });
  });
}

function defaultGrid(grid){
  pixel = 540 / grid + "px";

  for (i=0; i < grid; i++) { $("table").append("<tr></tr>");}
  for (i=0; i < grid; i++) {$("tr").append("<td><div class='square'></div></td>");}

  $(".square").width(pixel).height(pixel);
}

function reset(){
  $('table').html("");

  var gridR = prompt("Enter your grid size", "Grid size");
  pixel = 540 / gridR + "px !important";

defaultGrid(gridR);
}

function clearance(){
  $(".square").css({
    "visibility" : "visible",
    "background-color" : "black"
  });
}
