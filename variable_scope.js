function foo(){

    // All variables are accessible within functions.
    var bar = 1;
    let baz = 2;
    const qux = 3;

    // console.log(bar);
    // console.log(baz);
    // console.log(qux)

}

foo();

console.log(bar); // ReferenceError: bar is not defined
console.log(baz); // ReferenceError: baz is not defined
console.log(qux); // ReferenceError: qux is not defined