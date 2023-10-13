"use strict";
// Test for equality and inequality with strings
let fruit = 'apple';
console.log("is fruit == 'apple'? I predict True.", fruit == 'apple');
console.log("is fruit != 'banana'? I predict True.", fruit != 'banana');
console.log("is fruit != 'apple'? I predict False.", fruit != 'apple');
console.log("is fruit == 'Orange'? I predict False.", fruit == 'Orange');
// Test using the lower case function
let name1 = "John";
console.log("Is name.toLowerCase() == 'John'? I predict True.", name1.toLowerCase() == 'john');
console.log("Is name.toLowerCase() == 'Jane'? I predict False.", name1.toLowerCase() == 'Jane');
// Numerical tests
let num = 10;
console.log("Is num > 5? I predict True.", num > 5);
console.log("Is num < 0? I predict False.", num < 0);
console.log("Is num >= 10? I predict True.", num >= 10);
console.log("Is num <= 5? I predict False.", num <= 5);
// Test using "and" and "or" operations
let age = 25;
console.log("Is age > 18 and age < 30? I predict True.", age > 18 && age < 30);
console.log("Is age > 30 and age < 18? I predict False.", age > 30 && age < 18);
//Test whether an item is in array
let colors = ["red", "green", "blue"];
console.log("Is 'green' in colors? I predict True.", colors.includes('green'));
console.log("Is 'yellow' in colors? I predict False.", colors.includes('yellow'));
// Test whether an item is not in an array
let animals = ['dog', 'cat', 'horse'];
console.log("Is 'fish' not in animals? I predict True.", !animals.includes('fish'));
console.log("Is 'dog' not in animals? I predict False.", !animals.includes('dog'));
