"use strict";
function make_great(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great" + magicians[i]);
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Array of magician names
const magiciansNames = ["Christopher", "Sarantakosid", "David", "Merlin", "Dynamo"];
// Call make_ great with a copy of the original array and store the new array
const greatMagicians = make_great([...magiciansNames]); // making shallow copy using spread operator
// Call show_magicians to display the original list
show_magicians(magiciansNames);
// Call show_magicians again to display the new list with "the Great " added
show_magicians(greatMagicians);
