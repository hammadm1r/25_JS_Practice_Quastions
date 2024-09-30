
const str = ('pop')

const palCheck = (str) => {
    const reversestr = str.split("").reverse().join("");
    if(reversestr === str){
        return true;
    }
    return false;
}
console.log(palCheck(str));
