// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [10, 20, 30, 40, 50];
function double(number) {
    return number * 100;
}
  
var numbersDoubled = numbers.map(function double(number) {
    return number * 100;
  });

  //var numbersDoubled = numbers.map(number => number * 100); 
 // return number * 100;