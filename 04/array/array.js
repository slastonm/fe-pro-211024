let firstUser = 'Tom';
let secondUser = 'Bob';

// Array
let myFirstArr = ['User name Alice', firstUser, secondUser, true, 10, 20];
console.log(myFirstArr);

let secondArr = new Array(10);
console.log(secondArr);


if(myFirstArr.length>0 && myFirstArr.length>2){
    let thirdShellData = myFirstArr[2];
    console.log(thirdShellData);
    console.log(myFirstArr.length);
    let lastElement = myFirstArr.length-1;
    console.log(`First arr element ${myFirstArr[0]}`);
    console.log(`First arr element ${myFirstArr[lastElement]}`);
    myFirstArr[1] = false;
    console.log(myFirstArr);
}

secondArr[2] = 4;
secondArr[4] = 'Hello';
secondArr[6] = 'Test';

console.log(secondArr);

let usersData = [
    ['Tom', 'tom@gmail.com', 23, 'Reading, webdevolpment'],
    ['Bob', 'Bob@gmail.com', 25]
];

// console.log(usersData[1][2]);
console.log(`More info User name ${usersData[1][0]} user email ${usersData[1][1]} user age ${usersData[1][2]}`);

console.log(usersData);

console.log('======');
// console.log(myFirstArr[0]);
// console.log(myFirstArr[1]);
// console.log(myFirstArr[2]);
// console.log(myFirstArr[3]);

let standartArrayLength = myFirstArr.length;


for(let i=0; i<myFirstArr.length; i++){
    console.log(i);
    console.log(`Arr data by index ${i} = ${myFirstArr[i]}`);
}


for(let i=0; i<usersData.length; i++){
    // console.log(usersData[i]);
    // console.log(usersData[i][0]);
    // console.log(usersData[i][1]);
    // console.log(usersData[i][2]);

    // usersData[1]
    for(let c =0; c<usersData[i].length; c++){
        console.log(`User info ${usersData[i][c]}`);
    }
    console.log('============');
}

let emptyArr = new Array(10);
console.log(emptyArr);
function fillArr(arr, data){
    for(let i=0; i<arr.length; i++){
        arr[i] = data;
    }
}

// fillArr(emptyArr, '*');
// console.log(emptyArr);

