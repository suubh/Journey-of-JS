//10DaysofJs (HR)
// var n=5;
// var k=2;

function getmaxofK(n,k){
    var bit_and,maxK;
    var arr=[];
    for(let i=1;i<=n;i++){
        for(let j=i+1;j<=n;j++){
            bit_and=i&j;
            //console.log(bit_and);
            if(i<j){
                arr.push(bit_and);
            }
        }
    }
    console.log(arr);
    //maxK=Math.max(...arr);
    //console.log(maxK);
    var count=0;
    for(let i of arr){
        console.log(i);
        if(i>k){
            count++;
        }
    }
    console.log(count);
}
getmaxofK(9,2);
