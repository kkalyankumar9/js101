//Problem 2 : Given a character in lower case print the upper case character
let L ="abcdefghijklmnopqrstuvwxyz"
let U="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let char="k";
for(let i=0;i<=26-1;i++){
  if(char==L[i]){
    console.log(U[i]);
    
  }
}