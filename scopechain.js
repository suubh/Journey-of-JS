var name="Shub"; //gloabally defined 
console.log("Line number 2 ",name);

 function sayName(){
     var name ="Shubham";
     console.log("Line Number 6",name);
     sayNametwo();
     function sayNametwo(){
         console.log("Line Number 9",name);//Now this name will look just one level up for name and it will print "Shubham"
         //If "Shubham " is not present than it will see one more level up and print "Shub"
         //Note:It will never look below or something ,it will always look above.
     }
 }
 sayName();
