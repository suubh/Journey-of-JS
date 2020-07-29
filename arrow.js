//Arrow Function(=>)

var isEven = (n) => {
    return n%2 === 0;
}

console.log(isEven(2));

//CallBack Function

var result=[2,4,6,8].every(isEven);
console.log(result);

var resultO=[2,5,6,8].every(isEven);
console.log(resultO);


//Some one liner stuff

var resultPP = [2,4,6,8].every((e) => {
    return e%2===0;
});
console.log(resultPP);
//If we do not want to use return than , ".every((e)=> e%2===0);" ---no curly braces are used .

