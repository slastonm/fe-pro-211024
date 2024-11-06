let strValue = 'String JS';
console.log(strValue);
console.log(`Stirng lenght ${strValue.length}`);

let replacedStrValue = strValue.replace('JS', 'CSS');
console.log(`Replace value ${replacedStrValue}`);

console.log(`Slice string ${strValue.slice(1,5)}`);

let names = 'Nik!Tom!Rob';

// let namesArr = names.split(',');
let namesArr = names.split('!');

console.log(namesArr);

let userName = '    User     ';

let userChoice = ' Rock';
userChoice = userChoice.trim();
let computerChoice = 'Rock'
console.log(userChoice === computerChoice);
userName =userName.trim();
// userName =userName.trimStart();
// userName =userName.trimStart();
// userName =userName.trimEnd();
console.log(userName.length);


// Камінь === КАМІНЬ КАМІНЬ === кАмІнЬ

let textVaelue = 'JavAscrIpt';
let upperCase = textVaelue.toUpperCase();
console.log(upperCase);

let lowerCase = textVaelue.toLowerCase();
console.log(lowerCase);

let userValue = prompt('Type value');
console.log(userValue.length);
userValue = userValue.trim();
userValue = userValue.toUpperCase();
if(userValue === 'HI'){
    alert('Hi user');
}