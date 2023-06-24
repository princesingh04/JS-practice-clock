// console.log("Hello")
//  setTimeout(function(){
//     console.log(displaytime())
// },5000)
// console.log("This is played after timeout function")
function displaytime(){
    let curr = new Date();
    let hours= curr.getHours()%12;
    let mins= curr.getMinutes();
    let secs=curr.getSeconds();
     let formattedtime = hours.toString().padStart(2,'0')+":"+
                         mins.toString().padStart(2,'0')+":"+
                         secs.toString().padStart(2,'0');
                        

document.getElementById("clock").innerHTML=formattedtime;
//console.log(formattedtime);



}
setInterval(displaytime,1000)


// let currentDate = new Date();
// let minutes = currentDate.getMinutes();

// console.log(minutes); // Output: Current minutes
