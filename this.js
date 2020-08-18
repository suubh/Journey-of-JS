console.log(this);
//It will give a open scope in node.
//But in console it will give "Window",showing a Global context.

//here this only means the current context or the reference of the global object 
var user={
    firstName:"Shubham",
    coursecount:4,
    getcoursecount:function(){
        console.log("Line 10",this);
        function github(){
            console.log("suubh");
            console.log(this);
        }
        github();
    }
};

user.getcoursecount(); // here we get all the info of user ,because "this" contains the global object ,i.e why we use this.firstName

//IMPORTANT - ALl regular function calls ,"this" point to window object or global object .
//here funciton github calli.e github() is regular funtion  call and getcoursecount call i.e user.getcoursecount() is a function through object call .
//Output (in console)-
//Line 10 {firstName: "Shubham", coursecount: 4, getcoursecount: ƒ}
//VM148:7 suubh
//VM148:8 Window {parent: Window, opener: null, top: Window, length: 4, frames: Window, …}