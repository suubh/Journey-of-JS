//User is only allowed to make a purchase when all the variables are satisfied i.e TRUE

var isLoggedIn=true;
var emailIdVerified=true;
var cardInfo=true;

if(isLoggedIn){
    console.log("Succesfully LoggedIn");
    if(emailIdVerified){
        console.log("Email Id Verfied");
        if(cardInfo){
            console.log("You are now able to Purchase");
        }
        else{
            console.log("CardInfo is wrong ,Please Check !");
        }
    }
    else{
        console.log("EmailId not verified");
    }
}
else{
    console.log("You are not Logged IN");
}

//Instead of such explained code ,we can use logical operation which can combine the above code in one line 

if(isLoggedIn && emailIdVerified && cardInfo){
    console.log("You are now able to purchase !");
}
else{
    console.log("You are not able to purchase,Please look details !");
}
