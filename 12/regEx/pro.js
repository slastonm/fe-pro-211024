
let styleText = 'csss';

let patern = /^c/;
// console.log(`Test c start word ${patern.test(styleText)}`);
console.log(`Test c start word ${/^c/.test(styleText)}`);
let endStringPatern = /ss$/;
console.log(`Test ss end ${endStringPatern.test(styleText)}`);

let cssPatern = /^css$/;
let newText = "css";
console.log(`Test css ${cssPatern.test(newText)}`); // true
console.log(`Test css ${cssPatern.test("scss")}`); //false
console.log(`Test css ${cssPatern.test(" css ")}`);//false
console.log(`Test css ${cssPatern.test("css ")}`);//false
console.log(`Test css ${cssPatern.test("1css2")}`);//false

let timeString = "15:10";

let timePatern =/^\d{1,2}:\d\d$/;
console.log(`Test time ${timePatern.test(timeString)}`);// true
console.log(`Test time ${timePatern.test('6:35')}`);// true
console.log(`Test time ${timePatern.test('6:3')}`);//false
console.log(`Test time ${timePatern.test('Alarm 6:34!')}`);//false

let manyOtext = "Hellooo Woooooooooorld";
let oPatern = /o+/g;
let oMathces = manyOtext.match(oPatern);
console.log(oMathces);

let dotText = "cat c1t c!t cit bat rat";
let dotPatern = /c.t/g;

console.log(dotText.match(dotPatern));

let fruits = "apple bannana cherry orange apple bannana cherry";
let fruitPatern = /apple|cherry/g;

console.log(fruits.match(fruitPatern));

let textTimeFormat = "=Lorem ipsum 1-11-1995 dolor sit amet consectetur adipisicing elit. Tempora 21-9-1996 tenetur dolorum, quisquam facilis est molestiae provident similique suscipit ad, voluptate expedita eaque reprehenderit 01-10-2997 culpa. Amet assumenda in dignissimos laboriosam ex."

let dataYearPatern = /\d{1,2}-\d{1,2}-\d{3,4}/g;

console.log(textTimeFormat.match(dataYearPatern));

let phoneNumber = "+38 (051) 123-23-45";
let phonePatern = /^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
console.log(`Test phone number ${phonePatern.test(phoneNumber)}`);

let userEmail = 'useRnaMe_123@gmail.com';
let userEmail2 = 'useRnaMe!123My@gmail.com';
let emailPatern = /^[a-zA-Z0-9._%+!]+@[a-zA-Z]+.[a-zA-Z]{2,4}$/;

console.log(emailPatern.test(userEmail));
console.log(emailPatern.test(userEmail2));











