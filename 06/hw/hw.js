let numbers = [1,2,3,4,5,6,7];
console.log(`Origin arr ${numbers}`);
let removedElements = numbers.splice(4,3);

console.log(`Changed arr ${numbers}`);
console.log(`Removed numbers ${removedElements}`);

function removeFromArray(array, index, count){
    let removedData = array.splice(index, count);
    return removedData;
}

let originNumbers = [1,2,3,4,5,6,7];
let removedNumbers = removeFromArray(originNumbers, 2, 2);

console.log(`Origin data ${originNumbers}`);
console.log(`Origin data ${removedNumbers}`);


function transformArray(array, transformer){
    return array.map(element =>transformer(element));
}
function addString(element){
    return `Element: ${element}`
}

let numberArr = [10, 20,30];

let transformArr = transformArray(numberArr, addString);

console.log(`Before map ${numberArr}`);
console.log(transformArr);
console.log(`After map ${transformArr}`);


function filterArray(array, condition){
    return array.filter(item=>condition(item));
}
function isGreaterThan50(number){
    return number>50;
}

let nonSortedNumber = [10, 25, 55, 40, 60, 71, 12];
let filteredNumbers = filterArray(nonSortedNumber, isGreaterThan50);

console.log(`New array ${filteredNumbers}`);

const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];

for(let student of students){
    console.log(student);
    console.log(`Student info:`);
    for(let key in student){
        console.log(`${key}: ${student[key]}`);
    }

}