const megicians:string[]=["Christopher","Sarantakosid","David","Merlin","Dynamo"];

function make_great(magician: string[]):void {
    for(let i = 0; i < magician.length; i++){
        magician[i] = "the Great" +  magician[i];
    }
}
    
function show_magician(magician:string[]):void{
    for(let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    } 
}
// call make_great to modify the magicians
make_great(megicians);

// call show_magicians to see the modeified list
show_magician(megicians);

