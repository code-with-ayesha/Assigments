"use strict";
const numbers = [1, 2, 3, 4, 5];
// Intentionally trying to access an index that doesn't exist
const index = 3;
console.log(numbers[index]); // This will produce an index error
// To correct an error ,make sure the index is within the valid range
if (index >= 0 && index < numbers.length) {
    console.log(numbers[index]);
}
else {
    console.log("Index is out of range");
}
