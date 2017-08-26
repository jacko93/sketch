$("body").append(
  "<div class='buttons'><button onclick='reset();'>Reset</button>" +
  "<button onclick='clearance();'>Clear</button>" +
  "<button onclick='rainbow();'>Rainbow</button>" +
  "<button onclick='classic();'>Classic</button>" +
  "<button onclick='bonus();'>Bonus</button></div>" +
  "<div class='wrapper'>" +
  "<img src='images/korean1.jpg' id='one'>" +
  "<img src='images/korean2.jpg' id='two'>" +
  "<img src='images/korean3.jpg' id='three'>" +
  "<img src='images/rv.png' id='four'>" +
  "<p id='krn'>Choose your BONUS korean girl background!</p>" +
  "</div>" +
  "<p id='cp'>Created by: <a href='https://github.com/jacko93'>jacko93</a></p>"
);
$(".wrapper").append(  "<table></table>");
defaultGrid(10);
classic();
images();

/* function images() {
  var value = -99999  ;
  $("img").click(function(){

    $(this).css({
      "width" : "540px",
      "z-index" : value,
      "top" : "0",
      "right" : "0"
    });
    value += 1;
  });
}
*/

function images() {
  $("img").click(function(){
    $(this).clone().prop({id : "clone"}).appendTo(".wrapper");
  });
}

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
  var z = 0;
  $(".square").hover(function(){

    $(this).css("background-color", "rgb(" + z + ", " + z + ", " + z + ")");
    z += 4
    if (z >= 255) {
      z = 0;
    };
  });
}

function defaultGrid(grid){
  pixel = 540 / grid + "px";

  for (i=0; i < grid; i++) { $("table").append("<tr></tr>");}
  for (i=0; i < grid; i++) {$("tr").append("<td><div class='square'></div></td>");}

  $(".square").width(pixel).height(pixel);

  rainbow();
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
    "background-color" : "rgb(19, 7, 58)"
  });
}
