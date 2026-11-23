//CONSOLE

// console.log("hello?");
// console.log("hello" , "hi5");
// console.log("hello" + "hi5");
// console.log('hello %s');
// console.log('hello %s' , 'QuickRef.Me');
// console.error(new Error('Oops!'));


//NUMBERS

// let amount = 6;
// let price = 4.455;

// console.log(amount+price);

//VARIABLES

// let x = null;
// let name = false;
// const found = false;

// console.log(name, found, x);

// // var a;
// var a = 5;
// console.log(a);

// //STRINGS

// let single = 'where are you?';
// let double = "where are you?";

// console.log(single.length);
// console.log(double.length);
// console.log(single);
// console.log(double.single);

// //ARITHMETIC OPERATORS

// console.log("5"+"5");
// console.log("5"+5);
// console.log(5+5);
// console.log(5-5);
// console.log(5*5);
// console.log(51/5);
// console.log(5.5);
// console.log(14%5);

// //ASSIGNMENT OPERATORS

// let number = 100;
// number = number + 20;
// number += 30;
// number -= 100;
// number *= 5;

// console.log(number);

//STRING INTERPOLATION
// let age = 20;

//String Contenation
// 'Sam is ' + age + 'years old.';

//STRING INTERPOLATION
// console.log(`Sam is ${age} years old.`);
// console.log(`Sam is age years old.`);

// let x = 59 ;
// console.log(`he is ${x} years old.`);

//let Keyword

// let count ;
// console.log(count);  // => undefined
// count = 10;
// console.log(count);   // => 10

//CONST KEYWORD

// const numberOfColumns = 18;

// //typeError: Assignment to constant...
// numberOfColumns = 19;  
// console.log(numberOfColumns);


//#JavaScript Conditionals

//if Statement

// const isMailSent = true;
// if(isMailSent) {
//     console.log('Mail sent to recipient');
// }

//TERNARY OPERATOR

// var x = 1;
// result = (x == 1) ? true : false;  //true

// //OPERATORS

// true || false;   //true
// 10 > 5 || 10 > 20;  //true
// false || false;   //false
// 10 < 5 || 10 > 20;  //false

// //LOGICAL OPERATOR &&

// true && true ;   //true
// 1 > 2 && 2 > 1; //false
// true && false;  //false
// 10 === 10 && 100 > 20 //true

// //COMPARISON OPERATORS

// 1>3 ; //false
// 3>1 ; //true
// 250 >= 250 ; //true
// 1 === 1 ; //true
// 1 === 2 ; //false
// 1 === '1'; //false

// //LOGICAL OPERATOR !

// let lateWork = true;
// let oppositeValue = !lateWork;

// // false
// console.log(oppositeValue);

//NULLISH COALESCING OPERATOR ??

// null ?? 'I win';   // 'I win'
// undefined ?? 'Me too';  // 'Me too'

// false ?? 'I lose';  //false
// 0 ?? 'I lose again';  // 0
// '' ?? 'Damn it'    // ''

// ELSE IF 

// const size = 20;

// if (size > 100) {
//     console.log('big');
// }
// else if (size > 20){
//     console.log('medium');
// }
// else if(size > 4){
//     console.log('small');
// } else {
//     console.log('tiny');
// }

//SWITCH STATEMENT

// const food = 'salad';

// switch (food) {
//     case 'oyster':
//         console.log('the taste of the sea');
//         break;
//         case 'pizza':
//             console.log('A delicious pie');
//             break;
//             default:
//                 console.log('Enjoy your meal');
// }

// == VS ===

// 0 == false  // true
// 0 === false  // false, different type
// 1 == "1"   // true, automatic type conversion
// 1 === "1"  // false,, different type
// null == undefined  // true
// null === undefined  // false
// '0' == false   // true
// '0' === false  // false

// == just check the value, while === check both value and the type


//FUNCTION

// function sum(num1 , num2) {
//    return num1 + num2 ;
// }
// sum(3 , 5);
// console.log(sum);

// Defining the function:
// function sum(num1, num2) {
//   return num1 + num2;
// }

// // Calling the function:
// sum(3, 6); // 9

//ANONYMOUS FUNCTION

// named function
// function heavenToHell(){
//     return 'Boom!';
// }
// //Anonymous function
// const heavenToHell = function(){
//     return 'Boom!';
// }

//ARROW FUNCTION

//with two arguments

// const sum = (param1 , param2) => {
//     return param1 + param2;
// };
// console.log(sum(1 , 59));

// // with no argument
// //method-1
// const shubham = () => {
//     return null;
// };
// console.log(shubham());

// //method-2
// const shubh = () => {
//     console.log("VK18");
// };
// shubh();

// //with a single argument
// const shubh2 = (num1) => {
//     console.log(18);
// };
// shubh2();

// //method-2
// const checkWeight = weight => {
//     console.log(`Weight : ${weight}`);
// };
// checkWeight(60);


//CONCISE ARROW FUNCTIONS

// const multiply = (a , b) => a * b;
// console.log(multiply(19,20));

//RETURN KEYWORD

// with return
// function sum(num1, num2){
//     return num1 + num2 ;
// }

// The function  doesn't output the sum
// function sum(num1 , num2) {
//     num1 + num2 ;
// }

//CALLING FUNCTIONs

// function shubham(num1 , num2) {
//     return num1 + num2 ;
// }
// shubham(5, 29);  //calling the function

//FUNCTION EXPRESSION

// const dog = function(){
//     return 'Woof!';
// }

//FUNCTION PARAMETERS

// the parameter is name
// function kyahaalhai(name){
//     return `Hello, ${name}!`;
// }
// console.log(kyahaalhai());

//FUNCTION DECLARATION

// function add(num1 , num2){
//     return num1 + num2;
// }

 //                    #JavaScript Scope
 
 //Scope

//  function pizzaName(){
//     var pizzaName =  "margarita";
//     // code here can use pizzaName
//  }

//  //code here can't use pizzaName
//  console.log(pizzaName()); ---//undefined

// Block Scoped Variables

// const isLoggedIn = true;

// if (isLoggedIn == true){
//     const statusMessage = 'Logged in.';
// }

// // uncaught referenceError...
// console.log(statusMessage);

//Global variables

//Variable declared globally
// const color = 'blue';

// function printColor(){
//     console.log(color);
// }
// printColor();  ...blue 


// const sum = 'num1 + num2';
// function addition(){
//     console.log(sum);
// }

// addition();   ...num1 + num2

//Let vs Var

// for(let i=0 ; i<=n ; i++){
//     //this is the max scope for 'let'
//     //i accessible
// }
// // i not accessible

// for(var i=0; i<=m ; i++){
// // i accessible
// }
// // i accessible   ===>> var is scoped to the naerest function block while 'let' is scoped to the nearest enclosing block.

// const num ;
// for(let i= 9 ; i<=90 ; i++){
//     if(i%9==0)
//     console.log(i);
//     // return i*2;
// }

//Loop with closures

//Prints 5 five times, not what we meant.
// for(var i = 0; i<5 ; i++){
//     setTimeout(_ => console.log(i), 20);
// }

//Prints 0 , 1 , 2, 3 and 4 as expected.
// for(let j= 0; j<5; j++){
//     setTimeout(_ => console.log(j), 20);
// }

// the variable has its own copy using let, and the variable has shared copy using var.


//           #JavaScript Arrays

// const fruits = ["apple" , "papaya" , "orange"];

// //differnent data types
// const data = [ 1, 'egg' , false];

// console.log(fruits[0]);  ===>apple

//Property .length

// const num = [1, 2, 3, 4,34];

// num.length // 5
// console.log(num.length);