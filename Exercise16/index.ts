// step 1 informing people that you found a bigger dinner table.
 const guestList: string[] = ["Muqadass", "Zainab", "Maryam"];
 for(let i = 0; i < guestList.length; i++){
     console.log(`Hello, ${guestList[i]},we found a bigger dinner table.`)
 }

//  step 2 Add a new guest to the beginning of Array.
 let newGuestAtBeginning = "Gulshan"
 guestList.unshift(newGuestAtBeginning)

 console.log(guestList)

// 3rd step add one guest to the middle of array
 let newGuestInMiddle = "Hina"
 guestList.splice(2, 0, "Hina")
 console.log(guestList)

// 4th step use append() to add new guest to the end of your list

 let newGuestAtEnd = "Sumbal"
 guestList.push(newGuestAtEnd)
 console.log(guestList)

// Final step a new set of invitation messages:
console.log("New set of information messages:")
 for(let i = 0; i < guestList.length; i++){
     console.log(`Dear ${guestList[i]} you are invited for dinner.`)
}