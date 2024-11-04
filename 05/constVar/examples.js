// console.log(MyVar);
// console.log(myVar);


// let myVar ='Test';
// var MyVar = 'Test';
const my_var = 'Test';

// var x = 5;
// if(true){
//     var x = 10;
// }

// console.log(x);
let x = 5;
if(true){
    let x = 10;
    console.log(x);
}

console.log(x);

for(let i = 0; i<3; i++){
    console.log(`Inside for ${i}`);
    for(let i = 0; i<4; i++){
        console.log(`Second ${i}`);
    }
}

// console.log(`Outside for ${i}`);

//CONST

const PI = 3.14;

// PI = '3.1';

const userObj ={
    userName:'Tom'
}

// userObj = {};
userObj.userName = 'Bob';
userObj.age = 30;
userObj.email = 'tes@gmail.com';
delete userObj.age;

const myArr = [1,2,3];

// myArr = 123;
// myArr = {};
// myArr = '1,2,3';
myArr.push(4);
myArr.unshift();
myArr[0] = 123;

const APIKEY = 'frlewqjr443254325346';

APIKEY = 'new';

