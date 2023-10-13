"use strict";
let guestList = ["Gulshan", "Muqadass", "Hina", "Zainab", "Maryam", "Sumbal"];
// Message about invite only two people
console.log(`I can invite only two people for dinner`);
// step 2: remove guest from the list only two remain the same
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`sorry${removeGuest} i can't invite you to dinner.`);
}
// step 3 Print a message to each of the two people still on your list,letting them know they are still invited
for (let guest of guestList) {
    console.log(`Hello ${guest} you are still invited for dinner.`);
}
// step 4 Remove the last two names from your list,so you may have an empty list.Print your list to make sure that you actually have an empty list at the end of your program
guestList.pop();
guestList.pop();
// Print empty string
console.log(`Guest list after dinner`, guestList);
