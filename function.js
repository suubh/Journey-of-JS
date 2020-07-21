function hello(name){
    console.log("Wlcome to Javascript !");
    console.log(name);
}

hello();//It will print undefined for second log
hello("Shubham Singh");


function important(){
    return "It is a Note ";
}
important();//It will not print anything.

var note=important();
console.log(note);