var num1=8;
var num2=9;
//Operators in JS (+,-,/,*,%)
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);



//Also >,<,>=,<=
var answer=num1>num2; //( 8>9 ,and it will store in boolean)
console.log(answer);


var sellingPrice=199;
var listingPrice=999;
var discountPrice= ((listingPrice-sellingPrice)/listingPrice) *100;
console.log("Discount Percentage is := "+discountPrice);

var displaydiscount=Math.round(discountPrice);
console.log("Round off discount is := "+displaydiscount);