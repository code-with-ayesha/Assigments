"use strict";
// step 1: Creat an array to store Travel destination.
let travelDestinations = ["Paris", "New York", "London", "Turkey", "Germany"];
//  STEP 2:print your array in its original order
console.log("Original Order:");
console.log(travelDestinations);
//  step 3:print your array in alphabetical order without modifying the actual list.
const alphabeticalOrder = travelDestinations.slice().sort();
console.log("Alphabetical Order", alphabeticalOrder);
// print original order again
console.log("Original Order", travelDestinations);
// print reverse alphabetical order
const reverseAlphabeticalOrder = travelDestinations.slice().sort().reverse();
console.log("Reverse Alphabetical Order", reverseAlphabeticalOrder);
// print original order again
console.log("Original Order", travelDestinations);
// Reverse the order of the list
travelDestinations.reverse();
console.log("Reversed Order", travelDestinations);
// Reverse the order again to restore the original order.
travelDestinations.reverse();
console.log("Restored Order:", travelDestinations);
// Sort the array in alphabetical order
travelDestinations.sort();
console.log("Sorted in Alphabetical order:", travelDestinations);
// sort the array in reverse alphabetical order
travelDestinations.sort().reverse();
console.log("Sorted in Reverse Alphabetical order:", travelDestinations);
