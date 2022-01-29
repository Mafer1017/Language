$(document).ready(function() {
  $("form#formOne").submit(function() {
    const number1 = parseInt($("select#beverage").val());
    const number2 = parseInt($("select#music").val());
    const number3 = parseInt($("select#movie").val());
    const number4 = parseInt($("select#sport").val());
    const number5 = parseInt($("select#relax").val());
    const result = $(number1 + number2 + number3 + number4 + number5) ;


    
    if (number1 === 1) {
      $('#html').show();
    } else if (number1 === 2) {
      $('#css').show();
    } else if (number1 === 3) {
      $('#javaScript').show();
    }
    
    event.preventDefault();
  });
});

// $("#formOne").submit(function(event) {
//   event.preventDefault();

