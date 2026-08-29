let repeatedWords=(string)=>{
    let splittedString=string.split(" ")
    let count={};//here where you'll store the repeated words and how many times they repeated
    //instead of for(let i=0;i<splittedString.length;i++)
    for(word of splittedString){if(count[word]){
        count[word]+=1

    }else{count[word]=1}}
    return count
}
console.log(repeatedWords("the cat found the lazy cat"))
