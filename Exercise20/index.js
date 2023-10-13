"use strict";
// Think of something you could store in a array.
//  For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.
//  Write a program that creates a list containing these items.
const mountains = ["Mount Everst", "K2", "Kangchenjunga", "Makalu", "Annapurna"];
const rivers = ["Indus", "Yukon", "Lena", "Amazon", "Chenab"];
const countries = ["United States", "China", "India", "Russia", "Brazil"];
const languages = ["English", "French", "Arabic", "Hindi", "Urdu"];
const cities = ["New York", "Tokyo", "London", "Paris", "Beijing"];
// Print List
console.log("\nList of Mountains:");
for (let i = 0; i < mountains.length; i++) {
    console.log(`${i + 1}. ${mountains[i]}`);
}
console.log("\nList of Rivers:");
for (let i = 0; i < rivers.length; i++) {
    console.log(`${i + 1}. ${rivers[i]}`);
}
console.log("\nList of Countries:");
for (let i = 0; i < countries.length; i++) {
    console.log(`${i + 1}. ${countries[i]}`);
}
console.log("\nList of languages:");
for (let i = 0; i < languages.length; i++) {
    console.log(`${i + 1}. ${languages[i]}`);
}
console.log("\nList of cities:");
for (let i = 0; i < cities.length; i++) {
    console.log(`${i + 1}. ${cities[i]}`);
}
