function checkRep (str){
    const occurance = {};
    str.split('').forEach((elem)=>{
    if (occurance.hasOwnProperty(elem)=== false){
        occurance[elem] = 1;
    }else{
        occurance[elem]++;
    }}
)
console.log(occurance);
}

checkRep('hello')