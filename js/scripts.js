$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const number1 = parseInt($("input#beverage").val());
    const number2 = parseInt($("input#music").val());
    const number3 = parseInt($("input#movie").val());
    const number4 = parseInt($("input#sport").val());
    const number5 = parseInt($("input#relax").val());
    const sum = (number1 + number2 + number3 + number4 + number5) ;

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