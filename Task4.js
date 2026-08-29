let oldArray=[]
let isEven=(num)=>{if(num%2==0){ return num} }
for(let i=0;i<10;i++){
    oldArray.push(Math.floor(Math.random()*10))}
const evenArray=oldArray.filter(isEven);
console.log(evenArray);