/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";

let firstResult = statement.substring( 0, 4 );
let newResult = statement.substring( 9, statement.length);

console.log(firstResult+ newResult);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
