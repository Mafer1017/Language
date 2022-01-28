// $(document).ready(function() {
//   //const age = parseInt(prompt("How old are you?")); PROMPT FOR AGE

//   if (age > 21) {
//     $('#html').show();
//   } else if (age === 21) {
//     $('#css').show();
//   } else {
//     $('#javaScript').show();
//   }
// });

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    $(".person1").append(person1Input);
    $(".person2").append(person2Input);
    $(".animal").append(animalInput);
    $(".exclamation").append(exclamationInput);
    $(".verb").append(verbInput);
    $(".noun").append(nounInput);

    $("#story").show();

    const number1 = parseInt("beverage");
    const number2 = parseInt("music");
    const number3 = parseInt("movie");
    const number4 = parseInt("sport");
    const number5 = parseInt("relax");

    const age = parseInt($("input#").val());

    event.preventDefault();
  });
});