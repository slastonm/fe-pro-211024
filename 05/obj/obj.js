let burgersArr = [
    ['Big mac, 240, ./imgbigMac.png'],
    ['KFC, 220, ./imgKFC.png']
];

// let myObj = new Object();
// console.log(myObj);

let simpleObj = {};
console.log(simpleObj);

let laptopObj = {
    model:'apple',
    ram:'16gb',
    memory:512,
    colors:['silver', 'gold', 'deepblue'],
    info: function(){
        // this
        console.log(`${this.model} ram:${this.ram} memory ${this.memory} gb`);
        // console.log(`${laptopObj.model}`);
    }
}

laptopObj.processor = 'm3';
laptopObj.processor = 'm4max';
laptopObj.colors.push('purple');
// laptopObj.colors = 'purple';
console.log(laptopObj);
// console.log(laptopObj.model);
// console.log(laptopObj.info());
// laptopObj.info();

delete laptopObj.processor;
delete laptopObj.memory;
delete laptopObj.ram;
delete laptopObj.info;

console.log(laptopObj);


let objInfo = {
    age:32,
    emailAdress: 'test@gmail.com',
    frieds:['Tom', 'Bob'],
    isStudy:true,
    skills:[
        {skillName:'Html', rating: 4},
        {skillName:'CSS', rating: 4.5}
    ]
}

let cars =[
    {brand:'Toyota', model: 'Corolla', year: 2018},
    {brand:'Toyota', model: 'Corolla', year: 2019},
    {brand:'Toyota', model: 'Corolla', year: 2020},
    {brand:'Honda', model: 'Civic', year: 2019},
    {brand:'Ford', model: 'Focus', year: 2020},
    {brand:'Toyota', model: 'Camry', year: 2017}
];

const toyotCars = cars.filter(
    (car)=>car.brand === 'Toyota' && car.year >=2019
);

console.log(toyotCars);

cars.forEach((car)=>{
    // console.log(car);
    console.log(`Car brand ${car.brand} year ${car.year} model ${car.model}`);
})



let myArr =[
    {userName:'Tom', age:30},
    {userName:'Bob', age:33}
];

for(let value of myArr){
    console.log(value);
}

// for (let useValue  of objInfo) {
//     console.log(useValue);
// }

for (let key in objInfo) {
    // console.log(key);
    // console.log(objInfo.'age');

    console.log(objInfo[key]);
}

let forInObjTest = [
    {
    a:1,
    b:'second',
    c: 'Test'
}
]

for(let keyValue in forInObjTest){
    console.log(`For in get value ${forInObjTest[keyValue]}`);
}

console.log(forInObjTest);
// forInObjTest.forEach((item)=>{
//     console.log(item);
// });