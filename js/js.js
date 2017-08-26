$("body").append(
  "<div class='buttons'><button onclick='reset();'>Reset</button>" +
  "<button onclick='clearance();'>Clear</button>" +
  "<button onclick='rainbow();'>Rainbow</button>" +
  "<button onclick='classic();'>Classic</button>" +
  "<button onclick='bonus();'>Bonus</button></div>" +
  "<div class='wrapper'><img src='images/rv.png'></div>"
);
$(".wrapper").append(  "<table></table>");
defaultGrid(10);
classic();

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
    $(this).css("background-color", "rgb(255, 255, 255)");
  });
}

function defaultGrid(grid){
  pixel = 540 / grid + "px";

  for (i=0; i < grid; i++) { $("table").append("<tr></tr>");}
  for (i=0; i < grid; i++) {$("tr").append("<td><div class='square'></div></td>");}

  $(".square").width(pixel).height(pixel);
}

function reset(){
  $("table").html("");
  var gridR = prompt("Enter your grid size", "Grid size");
  pixel = 540 / gridR + "px";

  defaultGrid(gridR);

  $(".square").width(pixel).height(pixel);
}

function clearance(){
  $(".square").css({
    "visibility" : "visible",
    "background-color" : "black"
  });
}
