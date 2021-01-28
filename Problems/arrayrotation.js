var arr=[3,4,5];
var n=arr.length;
//No of rotation be k
var k =2;
var temp;
for(let i=0;i<k;i++){
    temp=arr.pop(n-1);
    arr.unshift(temp);
}
console.log(arr);//Our rotated array

//To handle queries
var queries=[0,1,2];
var ans =[];
for(let i of queries){
    //console.log(i);
    ans.push(arr[i]);

}
console.log(ans);