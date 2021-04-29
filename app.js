

//A data structure that can store and organize multiple values in a numbered/indexed list
// store strings, numbers, booleans, arrays (nested array)

//creating an array 
//3 ways 

//create an array with all the students in class use one of the methods to create an array 
var donuts= new Array("glazed", "chocolate", "jelly", "sprinkle", "vanilla", "cereal", "bearclaw", "oldfashioned");

donuts.indexOf(1); 
donuts.shift(); 
// let withBob = donuts.concat("Bob");
// console.log(withBob); 



for (i=0; i<donuts.length; i++) {
    console.log(donuts[i]);
}
console.log(donuts.join ("🌺"));
console.log(donuts.toString());

function myFunc() {
  
    var show= btn.style.color = "red";
    for (i=0; i<donuts.length; i++) {
    document.getElementById("btn").innerHTML = donuts.sort()   .join ("🍩") + show;
    }
  };






