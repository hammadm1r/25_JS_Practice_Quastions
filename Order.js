const str = ('Hammad');

function order(str){
    return str.split('').sort().join('');
}

console.log(order(str));