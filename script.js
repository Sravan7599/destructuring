// object destructuring 
const person = {
    name: 'sravan',
    age: 22,
    address: 'nellore', 
};

console.log(person['age']);

const {fname,years,place} = person;
console.log(person);




let array = ['red','blue','green','yellow','violet'];
let [first,second,third,fourth] = array;
console.log(first);

let [,,,fourth,fifth] = array;  
console.log();




// spread operator
let arr1 = [0,1,2,3];
let arr2 = [5,6,7,8];
const res = [...arr1,4,...arr2];
console.log(res);

const res1 = [...arr2,9,...arr1];
console.log(res1);




let person6 = {
    name: 'sravan',
    age:343,
}

let person7 = {
    name: 'kumar',
    age: 234,
}

let object_spread = {...person6,...person7};
console.log(object_spread);