$(document).ready(function() {
  const age = parseInt(prompt("How old are you?"));

  if (age > 21) {
    $('#html').show();
  } else if (age === 21) {
    $('#css').show();
  } else {
    $('#javaScript').show();
  }
});