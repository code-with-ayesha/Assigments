"use strict";
const current_user = ["john", "nick", "Alice", "bob", "emma"];
const new_user = ["john", "nick", "Alice", "admin", "olivia"];
for (let i = 0; i < new_user.length; i++) {
    const newUser = new_user[i];
    const lowerNewUser = newUser.toLowerCase();
    if (current_user.includes(lowerNewUser)) {
        console.log(`username ${newUser} is already taken,please enter new user name.`);
    }
    else {
        console.log(`username ${newUser} is avaliable.`);
    }
}
