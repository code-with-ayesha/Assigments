"use strict";
function createCar(manufacturer, model, options = {}) {
    const car = Object.assign({ manufacturer,
        model }, options);
    return car;
}
// Call the function with required and optional information
const myCar = createCar("Toyota", "Camry", { color: 'Blue', year: 2022, features: ["CPS",
        "Leather Seats"] });
const myCar1 = createCar("Toyota", "Camry");
// Print the created car object
console.log(myCar);
// Print the created car object
console.log(myCar1);
