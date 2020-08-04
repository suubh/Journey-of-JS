//More on methods and Objects.
var user={
    firstName:"Shubham",
    lastName:"Singh",
    role:"Student",
    loginCount:23,
    isLoggedusingGoogle:true,
    courselist:[],
    //Defining method inside user object ---->  function name : function(){},
    getCourse:function(coursename){
        if (this.courselist.includes(coursename)){
            console.log("Already registered for the course !");
        }
        else{
            this.courselist.push(coursename);
        }
    },

    getCourseCount:function(){
        return `${this.firstName} under the Role ${this.role} have ${this.courselist.length} course`;
        
    },

    getInfo:function(){
        console.table(user);
    }
    //Here this. only refer to the user object 
};

//console.log(user);
user.getCourse("C++");
user.getCourse("React.js");
user.getCourse("C++");//It will show already
user.getCourse("Python ");
console.log(user.getCourseCount());//because getsCourseCount() is  just returning, so we have to log it out.
console.log(user.getInfo());

