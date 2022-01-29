$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var number1 = parseInt($("input#beverage").val());
    var number2 = parseInt($("input#music").val());
    var number3 = parseInt($("input#movie").val());
    var number4 = parseInt($("input#sport").val());
    var number5 = parseInt($("input#relax").val());
    var sum = number1 + number2 + number3 + number4 + number5;

    if (sum < 15) {
      $('#html').show();
    } else if (sum === 10) {
      $('#css').show();
    } else {
      $('#javaScript').show();
    }
    event.preventDefault();
  });
});