//Reverse a String

const str = "Hello World"
const array = str.split(" ");

let comp_Str="";
console.log(array[1].length);
for (let i=0;i<=array.length-1;i++){
    let new_str = "";
    for (let j=array[i].length-1;j>=0;j--){
    new_str += array[i][j];
    } 
    console.log(new_str);
    comp_Str += ' '+ new_str;
}
    console.log(comp_Str);