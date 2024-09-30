//Check an array to be an object or array

const arr = ['Hammad','Rabeel'];
const obj = { name: 'Hammad', age: 20 };

const check_arr = (elem) =>{
    return Array.isArray(elem);
}

console.log(check_arr(arr));
console.log(check_arr(obj));
