var numbers=[14,15,2,5,8,6,3,7,5];

console.log(numbers.fill("Shub",3,5));
//fill(the value to fill,start(its exclusive),end(its inclusive))
//it will only in middle of start and end 

console.log(numbers.filter((n)=> n!=5));
//Filter gnerally filter out according to the given condition and return an array.

console.log(numbers.filter((n)=> n>6));
