let simpeStr = /hi/;
let simpleYearPatern = /\d\d\d\d/g;

let regClass = new RegExp('hi');
let regClassPatern = new RegExp("\d\d\d\d");

let textSearchPatern = "Lorem ipsum dolor 1945 sit amet consectetur adipisicing elit. 1234 Totam ipsam illum nihil eius magni iure 1975 praesentium nesciunt 2000 maiores. Atque dolorem 2010 laborum optio perspiciatis 1999 deleniti sequi excepturi error earum amet ipsa!";

let firstIndexSearch = textSearchPatern.search(simpleYearPatern);
console.log(firstIndexSearch);

//replace 

// let newText = textSearchPatern.replace('1945', 'JS JS JS');
let newText = textSearchPatern.replace(simpleYearPatern, 'JS JS JS');

console.log(newText);

//match

let matchResult = textSearchPatern.match(simpleYearPatern);
console.log(matchResult);

//split

let splitText = "8061123-23-24";
let splitResult = splitText.split('-');
console.log(splitResult);

let textSplitByRegEx = textSearchPatern.split(simpleYearPatern);
console.log(textSplitByRegEx);

//test

// pincode - 4 4-number
let pinCodePatern = /\d\d\d\d/;
console.log(pinCodePatern.test('123'));
console.log(pinCodePatern.test('1234'));
console.log(pinCodePatern.test('12 3'));
console.log(pinCodePatern.test('12a3'));
console.log(pinCodePatern.test('12ab'));
console.log(pinCodePatern.test('12!3'));
console.log(pinCodePatern.test('12&3'));
console.log(pinCodePatern.test('12-3'));





