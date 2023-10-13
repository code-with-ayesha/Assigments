"use strict";
let favoriteTransportation = [];
favoriteTransportation.push(["motorcycle", "Honda"]);
favoriteTransportation.push(["car", "Toyota"]);
favoriteTransportation.push(["bicycle", "Sohrab"]);
// console.log(favoriteTransportation)
// using for each loop to print a series of statements
favoriteTransportation.forEach(([transport, brand]) => { console.log(`I would like to own a ${brand} ${transport}3.0`); });
