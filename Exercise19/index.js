"use strict";
// Dinner Guests: Working with one of the programs from Exercises 14 through 18,
//  print a message indicating the number of people you are inviting to dinner.
// Original guest list 
const guestList = ["Gulshan", "Muqadass", "Hina", "Zainab", "Maryam", "Sumbal"];
// Print the number of guest
console.log(`Print the number of guest invited ${guestList.length}`);
// print the guest names
for (let i = 0; i < guestList.length; i++) {
    console.log(`Guest ${i + 1}: ${guestList[i]}`);
}
