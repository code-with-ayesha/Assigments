"use strict";
const alien_color = "red";
if (alien_color === "green") {
    console.log("Player earned 5 points for shooting green alien.");
}
else if (alien_color === "yellow") {
    console.log("Player earned 10 points for shooting yellow alien.");
}
else if (alien_color === "red") {
    console.log("Player earned 15 points for shooting red alien.");
}
else {
    console.log("Unknown alien color.No points earned.");
}
