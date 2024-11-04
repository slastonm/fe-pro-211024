let joinArr = ['Hello', 'world'];
// let afterJoin = joinArr.join('');
let afterJoin = joinArr.join(',');
afterJoin = afterJoin.toUpperCase();
//split
afterJoin = afterJoin.split(',');
console.log(afterJoin);

// Slice

console.log('===slice====');
let fruits = ['яблуко', 'банан', 'вишня', 'апельсин', 'груша'];

// let afterSlice = fruits.slice();
// let afterSlice = fruits.slice(3);
// let afterSlice = fruits.slice(1,4);
let afterSlice = fruits.slice(-3);

console.log(fruits);
console.log(afterSlice);

//Splice
console.log('===Splice====');
let spliceFruits = ['яблуко', 'банан', 'вишня', 'апельсин', 'груша'];

// let afterSpliceArr = spliceFruits.splice(2);
// let afterSpliceArr = spliceFruits.splice(1,3);
// let afterSpliceArr = spliceFruits.splice(-2);
let afterSpliceArr = spliceFruits.splice(2,0, 'Слива','Полуниця');


console.log(spliceFruits);
console.log(afterSpliceArr);

//Filter
console.log('===Filter====');

let filterArray = [10,20, 19, 21, 23, 15, 40];
function filterValue(value){
    return value>15;
}

// let afterFilter = filterArray.filter(filterValue);
let afterFilter = filterArray.filter((number)=>number%2 ===0);

console.log(filterArray);
console.log(afterFilter);


//ForEach
console.log('===ForEach====');

let forEachPrice = ['10$', '33$', '20$'];

forEachPrice.forEach((value, index, arr)=>{
    console.log(`ForEach ${value}, index ${index} from ${arr}`);
});

forEachPrice.forEach((value)=>{
    console.log(`Product price ${value}`);
});
// array.forEach(element => {
    
// });
let mapArr = ['a', 'b', 'c'];
let newMapArr = mapArr.map((value, index, array)=>{
    return `Map value old array ${value}, ${index} from ${array}`
});

console.log( mapArr);
console.log( newMapArr);

//Old way

console.log('===Loop====');
let oldArr = [111, 2, 333];
// let newArrPlusOne = [];
// for(let i=0; i<oldArr.length; i++){
//     console.log(oldArr[i]);
//     newArrPlusOne.push(oldArr[i]+1);
// }
let newArrPlusOne = oldArr.map(item=>item+1);
console.log(oldArr);
console.log(newArrPlusOne);
