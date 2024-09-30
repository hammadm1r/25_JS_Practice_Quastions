const str = "hammad";

function changeCase(str){
    const upperCase = str.split('');
    upperCase[0] = upperCase[0].toUpperCase();
    return upperCase.join('');
}
console.log(changeCase(str));