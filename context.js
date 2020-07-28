sayhello()

function sayhello(){
    console.log("Hello everyone");
}

//Here the function is declared after the call . It will work becasuse of "Global Context"
//--------------------------------------------------//
var name="Shubham";
if(name==name){
    console.log("True statement");
}
//This gonna print "True statement"
//---------------------------------------------------//

if(name==name){
    console.log("True statement");
}
//This gonna work on browser console because of Global context.But not using node because window is not defined in node engine .

//----------------------------------------------------//


//Context is of mainly two types- "Global Context" and "Execution context".
//And their are two rules -
//1.Function declaration are scanned and made available.
//2.Variable declaration are scanned and made undefined.

//For the proof of first point
pay(45); 
function pay(a){
    var bill=parseInt(a);
    console.log(bill+20);
}
//It will print 65

//For the second point
bonus(20);
var bonus=function (b){
    var bill=parseInt(b);
    console.log(bill+30);
}
//Here it will "bonus is not a function",because its a variable and it is undefined(with respest of context)


console.log(name);
var name="Shubham";
//undefined
