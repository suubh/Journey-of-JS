sayhello()

function sayhello(){
    console.log("Hello everyone");
}

//Here the function is declared after the call . It will work becasuse of "Global Context"

var name="Shubham";
if(name==name){
    console.log("True statement");
}
//This gonna print "True statement"

if(name==window.name){
    console.log("True statement");
}
//This gonna work on browser console because of Global context.But not using node because window is not defined in node engine .