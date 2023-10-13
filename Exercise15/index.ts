// Orignal guest list
const guestList: string[] = ["Muqadass", "Zainab", "Maryam"];

// Print the guest who can't make it
// const guestWhoCantMakeIt= guestList[1];
// console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);

// Replace the guest who can't make it with a new person
 const newGuest: string = "Gulshan";
 guestList[1] = newGuest;

// Print a second set of invitation message for the updated guest list
 for (let i = 0; i < guestList.length; i++) {
     console.log(`Dear ${guestList[i]}, you are cordially invited to dinner.we would 
     be honored to have your presence.`);
}
