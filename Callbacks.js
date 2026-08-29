setTimeout(()=>{
    console.log("wow")
},100)
let numbers=[1,2,3,4,5,5,6,7,8,9]
let myForEach=(array,cb)=>{
    for(let i=0;i<array.length;i++){
        let nums=array[i];
        cb(nums);
    }
}
myForEach(numbers,(num)=>{
    console.log(num)
})