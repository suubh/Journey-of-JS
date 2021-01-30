var date = new Date('August 19, 1975 23:15:30');
console.log(date.getDay());

//MM/DD/YYYY
//getDay return 0-6 from Sunday to Saturday
// Sunday-0
// Monday-1
// Tuesday-2
// Wednesday-3
// Thrusday-4
// Friday-5
// Saturday-6
//new Date is use to parse,to use in getDay()


var dayName=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
i=date.getDay();
console.log(dayName[i]);


