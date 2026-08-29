//Write a function that takes a sentence and returns an object counting how many times each word appears.
//1-give a ".split()" a try
const countingRepeatedWords=(string)=>{
    let repeatedWordsObject={};
    let speratedArray=string.split(" ")
    let counter=0;
    let repeatedWord;
    for(let x=0;x<speratedArray.length;x++){
        for(let y=0;y<speratedArray.length;y++){
            if(speratedArray[x]===speratedArray[y]){
                counter+=1;

            }
        }
        if(counter>=2){
            repeatedWord=speratedArray[x];
            repeatedWordsObject[repeatedWord]=counter;
            }
        counter=0;
    }
    return repeatedWordsObject

}
console.log(countingRepeatedWords("the cat jumps over the lazy cat"));