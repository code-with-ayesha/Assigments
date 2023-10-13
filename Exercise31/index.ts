let userNames : string [] = ["admin","john","nick","Eric","Alice"];
 userNames.length = 0;
if(userNames.length === 0){
    console.log("We need to find some users.");
}
else{
    for(let i = 0;i < userNames.length;i ++ ){
        if(userNames[i] === "admin"){
            console.log("Hello admin,would you like to see a status report?")
        }else
        console.log(`Hello ${userNames[i]}23 thank you for logging in again`)
    }
        

   
}