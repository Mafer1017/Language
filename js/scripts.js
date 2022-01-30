$(document).ready(function() {
  $("form#surveyOne").submit(function() {
    const number1 = parseInt($("select#drink").val());
    const number2 = parseInt($("select#music").val());
    const number3 = parseInt($("select#movie").val());
    const number4 = parseInt($("select#sport").val());
    const number5 = parseInt($("select#relax").val());
    const result = number1 + number2 + number3 + number4 + number5;


    
    if (result < 10) {
      $('#html').show();
    } else if (result  === 10) {
      $('#css').show();
    } else if (result > 10) {
      $('#javaScript').show();
    }
    event.preventDefault();
  });
});
