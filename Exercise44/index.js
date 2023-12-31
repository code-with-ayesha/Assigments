"use strict";
function orderSandwich(items) {
    if (items.length === 0) {
        console.log("You ordered an empty sandwich.");
    }
    else {
        console.log("You ordered a sandwich with the following items:");
        for (let i = 0; i < items.length; i++) {
            console.log(`- ${items[i]}`);
        }
    }
}
// Call the function with different numbers of arguments
orderSandwich(["Onion", "Cheese", "Lettuce"]);
orderSandwich(["Turkey", "Swiss",]);
orderSandwich([]);
