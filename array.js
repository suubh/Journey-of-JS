var countries=["INdia","China","USA","Japan"];
//or
var name=new Array('Assam','Delhi','Kolkata','Hyderabad');

console.log(name[2]);
console.log(name.length);

//Replacing 
name[1]="Arunachal Pradesh";
console.log(name);


//Removing the last element 
name.pop();
console.log("After removing Hyderabad : ",name);


//Adding any value in the start of array
name.unshift("Mumbai");
console.log("After adding Mumbai to name[0] : ",name);


//Removing the unshifted value
name.shift();
console.log("Removing : ",name);


//Finding index 
var value=name.indexOf("Assam");
console.log(value);

var notPresent =name.indexOf("China");
console.log(notPresent);


//To Convert string to array
console.log(Array.from("Shubham"));

