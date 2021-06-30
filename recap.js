// select line, then "command /" to comment (//) multiple lines
// Initialization
var x = 12;
let x = 12.0;
x = "Gillian";
// Print My Message in Terminal Window when key in: node recap.js
console.log("My Message");
// Print content of x variable
console.log(`Value of x: ${x}`);
// if else
let age = 19;
if (age>18){
    console.log("You can vote!");
} else {
    console.log("You cannot vote right now");
};
// both console.log statements print the same thing
let x = 12;
let y = 3;
console.log("Value of x: " + x + ", Value of y: " + y + ", and " + x + "/" + y + " = ", +(x / y)
);
console.log(`Value of x: ${x}, Value of y: ${y}, and ${x}/${y} = ${x / y}`);
// functions
function add(a,b){
    console.log(`a: ${a}`);
    console.log(`b: ${b}`);
    console.log(`a + b = ${a + b}`);
};
print_sum(2,3);
// 
function add(a,b){
    return a + b;
};
var sum = add(2,3);
console.log(`Sum: ${sum}`);
// Anonymous Functions, var can be used to store functions
var function_to_print_sum = function (a,b){
    console.log("a + b = " + (a + b));
};
function_to_print_sum(4,4);
// Arrow functions
var function_to_print_sum = (a,b) => {
    console.log("a + b = " + (a + b));
};
function_to_print_sum(4,4);
//
function add(a,b){
    return a+b;
}
function product(a,b){
return a*b;
}
function print_after_operation(a,b,operation){
    var result = operation(a,b);
    console.log("Result: " + result);
}
print_after_operation(3,4,add);
print_after_operation(3,4,product);
print_after_operation(3,4,(a,b)=>{
    return a-b;
});