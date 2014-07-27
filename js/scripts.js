$(document).ready(function() {
  $('form#coin').submit(function(event) {
    $('#least').empty();
    $('#random').empty();
    var coinInput = parseInt($('input#input').val());
    var result = coinCombinations(coinInput);
    console.log(result);

    $('#least').append(result[0]);
    $('.output-area').show();

    $('#random').append(result[1]);
    $('.output-area').show();
    event.preventDefault();
  });
});

var coinCombinations = function(input){
  var leastOutput = least(input);
  var randomOutput = randomized(input);
  var output = [leastOutput, randomOutput];
  console.log(output);
  return output;
};

var least = function(number) {
  var leftover=0, quarters=0, dimes=0, nickels=0, pennies=0;

  quarters = parseInt(number/25);
  leftover = number %25;
  dimes = parseInt(leftover/10);
  leftover = leftover %10;
  nickels=  parseInt(leftover/5);
  leftover = leftover %5;
  pennies = leftover;

  return  quarters  + " quarters, "     +
          dimes     + " dimes, "        +
          nickels   + " nickels, and "  +
          pennies   + " pennies";
};

var randomized = function(number) {
  var leftover=0, quarters=0, dimes=0, nickels=0, pennies=0;
  var random1 = Math.floor(Math.random() * (number - 1)) + 1;
  var reducedNumber1 = number - random1;
  var random2 = Math.floor(Math.random() * (reducedNumber1 - 1)) + 1;
  var reducedNumber2 = number - random1 - random2;
  var random3 = Math.floor(Math.random() * (reducedNumber2 - 1)) + 1;
  var reducedNumber3 = number - random1 - random2 - random3;

  quarters = parseInt(random1/25);
  leftover = random1 %25;
  dimes = parseInt(leftover/10);
  leftover = leftover %10;
  nickels =  parseInt(leftover/5);
  leftover = leftover %5;
  pennies = leftover;
  // console.log("first pass");

  quarters += parseInt(random2/25);
  leftover = random2 %25;
  dimes += parseInt(leftover/10);
  leftover = leftover %10;
  nickels +=  parseInt(leftover/5);
  leftover = leftover %5;
  pennies += leftover;
  // console.log("second pass");

  quarters += parseInt(random3/25);
  leftover = random3 %25;
  dimes += parseInt(leftover/10);
  leftover = leftover %10;
  nickels +=  parseInt(leftover/5);
  leftover = leftover %5;
  pennies += leftover;
  // console.log("third pass");

  quarters += parseInt(reducedNumber3/25);
  leftover = reducedNumber3 %25;
  dimes += parseInt(leftover/10);
  leftover = leftover %10;
  nickels +=  parseInt(leftover/5);
  leftover = leftover %5;
  pennies += leftover;
  // console.log("fourth pass");

return  quarters  + " quarters, "     +
        dimes     + " dimes, "        +
        nickels   + " nickels, and "  +
        pennies   + " pennies";
};

