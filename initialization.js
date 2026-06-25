// var foo;
// let bar;
// const baz; // SyntaxError: Missing initializer in const declaration

// ! Re-declaration

// var foo = 1;
// var foo = 2; 
// console.log(foo); // 2

// let baz = 3;
// let baz = 4; // SyntaxError: Identifier 'baz' has already been declared

//! Reassignment

var foo = 1;
foo = 2;
// console.log(foo); // 2

let bar = 3;
bar = 4;
console.log(bar); // 4

const baz = 5;
baz = 6; // TypeError: Assignment to constant variable.

