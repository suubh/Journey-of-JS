//Create an application with following roles
//admin- Full access
//subadmin- Gets acess to particular
//testprep- Prepares the test
//user- The user which can only visit your page

var role="admin";

switch(role){
    case "admin":
        console.log("Full access");
        break;
    case "subadmin":
        console.log("Gets acess to particular");
        break;
    case "testprep":
        console.log("Prepares the test");
        break;
    case "user":
        console.log("The user which can only visit your page");
        break;
    default:
        console.log("Trial user");
        break;
}