//For loop
//let is use in place of var mpstly ,because let is memory efficient and after the loop the compiler dont know what 'i' is .
for (let i = 0; i<10; i++) {
    console.log(i);
    
}




//While loop
var name=['Shubham','Singh','Github','Microsoft'];
let i=0;
while(i<name.length){
    console.log(name[i]);
    i++;
}



//For each loop(technically not a loop ,but a method on array)
const states=['Assam','Arunachal','Kolkata','Hyderabad','Bangalore','Delhi'];
states.forEach((i) => ( console.log(i) ));


//For in and For of 
const sites=['Facebook','Instagram','Github','Medium','LinkediN'];
for(const i of sites){ //for of is generally used with array
    console.log(i);
}


const sitesShort={ //for in is generally used with objects.
    fb:'Facebook',
    insta:'Instagram',
    L:'LinkedIN',
};
for (const i in sitesShort){
    console.log(sitesShort[i]);

}



