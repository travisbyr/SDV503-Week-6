// Arguments are the value you pass in
// Paramaters are the named variables inside the function
// that recieved
/*
function add(a, b) {
  return a + b;
}
console.log(add(10, 5));

function sub(x, y) {
  return x - y;
}
console.log(sub(10, 5));

function foo(z = 3) {
  console.log(z);
}

console.log(foo());

function example(a, b, c) {
  return a + b + c;
}

console.log(example(10, 5, 3));
console.log(example.length); //counts length of string

if (example.length == 1) {
  return console.log(example(a - b - c));
} else {
  console.log("test");
}

function foof(x, y = 1) {
  return console.log(x);
}

console.log(foof.length);

function hello(x, y, z) {
  return arguments.length;
}

console.log(hello(5, 4));

function hello(x, y, z) {
  return arguments.length;
}

console.log(hello(5, 4));
console.log(hello.length);

// Arugement length is the length of arguments given to the function
// Function length is the length of parameters in the function

function foo(...args) {
  console.log(args[3]);
}

var arr = [1, 2, 3, 4, 5];
foo(...arr);

function foo(x, y, z, d, e, ...args) {
  console.log(x, y, z, d, args);
}

foo(1, 2, 3, 4, 5, 6, 7);
*/
function asd(...args) {
  console.log(args[5]);
}

var arr = [1, 2, 3, 4, 5, 6, 7];
asd(...arr); // (...) is called the spread operator
