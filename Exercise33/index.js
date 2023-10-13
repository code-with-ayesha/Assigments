"use strict";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    let ordinaryEnding = "th";
    if (number === 1) {
        ordinaryEnding = "st";
    }
    else if (number === 2) {
        ordinaryEnding = "nd";
    }
    else if (number === 3) {
        ordinaryEnding = "rd";
    }
    console.log(`${number}${ordinaryEnding}`);
}
