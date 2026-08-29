let array=['faisal','faisal','khalid','faisal','osama'];
let unduplicatedArray=[];
for(let name of array ){
    let isItRepeated=false;
    for(let duplicate of unduplicatedArray){
        if(name===duplicate){
            isItRepeated=true
        }
    }if(isItRepeated===false){
        unduplicatedArray.push(name)
    }

    
}
console.log(unduplicatedArray)