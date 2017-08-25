$('body').append('<div class="wrapper"></div>');
$('.wrapper').append('<button onclick="reset();">Reset</button>' + '<table></table>');

for (i=0; i < 10; i++) {
  $('table').append('<tr></tr>');
}

for (i=0; i < 10; i++) {
  $('tr').append('<td><div class="square"></div></td>');
}

function reset() {
  $('body').html('');

  $('body').append('<div class="wrapper"></div>');
  $('.wrapper').append('<button onclick="reset();">Reset</button>' + '<table></table>');

  var userSize = prompt("Enter your grid size:", "Grid size");
  var pixelSize = 400 / userSize + "px";

  for (i=0; i < userSize; i++) {
    $('table').append('<tr></tr>');
  }

  for (i=0; i < userSize; i++) {
    $('tr').append('<td><div class="square"></div></td>');
  }

  $(".square").css({
    "width" : pixelSize,
    "height" : pixelSize
  });
}
