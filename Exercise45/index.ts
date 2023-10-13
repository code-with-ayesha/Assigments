interface Car {
    manufacturer: string;
    model: string;
    color?: string;
    year?: number;
    features?: string[];
}
function createCar(manufacturer:string, model: string, options: Partial<Car> = {}): Car {
    const car: Car = {
        manufacturer,
        model,
         ...options, //  spread operator for options
    };
    return car;
}
// Call the function with required and optional information
const myCar = createCar("Toyota", "Camry", {color: 'Blue', year: 2022, features:["CPS"
,"Leather Seats"]})
const myCar1 = createCar("Toyota", "Camry")
// Print the created car object
console.log(myCar);
// Print the created car object
console.log(myCar1);


