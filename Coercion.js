//FALSY VALUE
//undefined
//null
//..
//NaN
//These all are False values 

var say=null;
if(say){
    console.log("Lets see whether it prints or not ");
}


//COERCION 
// == and ===
var exam="2";
if(2 == exam){
    console.log("== only checks the data !");
}
if(2 === exam){
    console.log("It will not print !");
}
//=== checks both data and data type.