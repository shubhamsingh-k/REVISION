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

const size = 20;

if (size > 100) {
    console.log('big');
}
else if (size > 20){
    console.log('medium');
}
else if(size > 4){
    console.log('small');
} else {
    console.log('tiny');
}