let isEven=(num)=>{
    if(num%2==0){
        return true

    }else{
        return false
    }
}
for(let i=0;i<10;i++){
    ranNum=Math.floor(Math.random()*10)
    console.log(ranNum,isEven(ranNum));
}