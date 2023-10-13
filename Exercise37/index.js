"use strict";
function makeShirt(size = "Large", message = "I Love Typescript") {
    console.log(`Size: ${size},Message: ${message}`);
}
// Large shirt with default message
makeShirt(); // Output: Size: Large, Message: 'I love Typescript'
// Medium shirt with default message 
makeShirt("Medium"); // Output: Size: Medium, Message: 'I love Typescript'
// Custom shirt with a different message and size 
makeShirt("Small", "Typescript Rocks!"); // Output: Size: Small, Message: 'I love Typescript!'
