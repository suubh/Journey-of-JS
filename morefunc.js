//A function that can answer the role of a user
//admin-all acess
//aubadmin-some access only
//testprep-prepares test
//user- consume content only
//other-only for trial

var getUserRole=function (name,role){
    switch(role){
        case "admin":
            return `${name} is admin with all access`
            
        case "subadmin":
            return `${name} is sub-admin with some access`
            
        case "testprep":
            return `${name} prepare the test`
            
        case "user":
            return `${name} is user with content only`
            
        case "other":
            return `${name} is trial person `
            
        default:
            
            

    }
}

console.log(getUserRole("Shubham","admin"));