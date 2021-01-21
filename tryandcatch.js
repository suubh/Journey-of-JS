function errorHandler(x){
    try{
        return error(x);
    }
    catch(e){
        logMyErrors(e);
    }

}
function error(x){
    if (x==5){
        return new Error("Error Found !");
    }
    return x;
}

console.log(errorHandler(5));