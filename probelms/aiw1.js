//Problem 1 : Given an array print the position (starting with 1) and the element in a single line.

let arr=[2,5,8,1,2];
let bag="";
for(let i=1;i<=arr.length-1;i++){
  bag+=arr[i]+" ";
}
console.log(bag);