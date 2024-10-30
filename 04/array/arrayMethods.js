let shopingList = [];
console.log(shopingList);
shopingList.push('Milk');
console.log(shopingList);
shopingList.push('Orange');
console.log(shopingList);
let myProduct = 'soap'
shopingList.push(myProduct);
console.log(shopingList);

console.log('====');

shopingList.pop();
console.log(shopingList);
shopingList.pop();
console.log(shopingList);

console.log('====');

shopingList.unshift('book');
console.log(shopingList);
shopingList.unshift('TV');
console.log(shopingList);

console.log('====');

shopingList.shift();
console.log(shopingList);
shopingList.shift();
console.log(shopingList);
shopingList.shift();
console.log(shopingList);

console.log('====');

let myData = 'Hello';

// myData.push('Hello');

console.log(Array.isArray('String'));
console.log(Array.isArray(123));
console.log(Array.isArray(true));
console.log(Array.isArray([123, 'hello', true]));
console.log(Array.isArray(shopingList));


let users = ['Tom', 'Bob', 'John'];
// let userMark = [0, 0, 0];
// userMark[1] = 80;
let fillArr = new Array(10);
fillArr.fill(10);
console.log(fillArr);
fillArr.fill(0, 5);
console.log(fillArr);

fillArr.fill('г', 7,9);
console.log(fillArr);


// Sort

let rating = [10,13,50,43,21,51,31,3,42,5];
// let rating = ['cat', 'rat', 'bat', 'cow'];

// rating.sort();
// rating.sort((a,b)=>a-b);
rating.sort((a,b)=>b-a);

console.log(rating);

//Reverse 
console.log('Reverse');

let reverseArr = [1,2,3];
reverseArr.reverse();
console.log(reverseArr);

//Concat 
console.log('Contcat');

let firstArr = [1,2,3];
let secondArr = [4,5,6];

// firstArr = firstArr.concat(secondArr);
firstArr = firstArr.concat(secondArr, 7,8,9, [10,11]);

console.log(firstArr);

console.log('== Includes ==');
let includesArr = [1,20, 34,'Test', 'Tom'];
console.log(includesArr.includes(20));
console.log(includesArr.includes('Hello'));
console.log(includesArr.includes('Tom'));// True
console.log(includesArr.includes(123)); //false


console.log('== IndexOf ==');

let indexOfArr = [1,20, 34,'Test', 'Tom'];
console.log(indexOfArr);
console.log(indexOfArr.indexOf('Tom'));
console.log(indexOfArr.indexOf(20));
console.log(indexOfArr.indexOf(200));
console.log(indexOfArr.indexOf('Bob'));

indexOfArr[4] = 'Bob';


let myArr = [];

function addItem(arr, item){

}

addItem(myArr, 'Hello item text'); // let myArr = ['Hello item text'];






