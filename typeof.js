// console.log(typeof 42) // number
// console.log(typeof 'hello') // string
// console.log(typeof null) // object
// console.log(typeof Symbol()); // symbol
// console.log(typeof BigInt(123)); // bigint
// console.log(typeof function() {}); // function

// ! Pitfalls

let result = '5' + 2; 
// JavaScript will convert number 2 to string and 
// will concatenate the string 5 to the string 2
// typeof result will return string

//console.log(result, typeof result); // 52 string

let difference = '5' - 2;
// JavaScript will convert the string 5 to the number 5
// and will perform subtraction so we have 5 - 2 = 3
// the variable difference data type will be number

console.log(difference, typeof difference); // 3 number

/*
    In the first example, since strings can be concatenated with
    the '+' operator, the number is converted into a string
    and the two strings are concatenated together
*/

/*
    In the second example, strings cannot work with the
    "-" operator, but two numbers can be subtracted,
    so the string is first converted into a number
    and the result is the difference.
*/