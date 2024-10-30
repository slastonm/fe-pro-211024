let start = 1;
let end = 20;
let summ = 0;
let i = start;

while(i<=end){
    if(i%2===0){
        // summ = summ + i;
        summ +=i;
    }
    i++;
}
console.log(`Сума всіх парних чисел від ${start} до  ${end} = ${summ}`);


let number = 4;
for(let i=0; i<=20; i++){
    console.log(`${number} * ${i} = ${number*i}`);
}


let userNumber = 10;

for(let i = 1; i<=userNumber; i++){
    if(i%2 === 0){
        console.log(`${i} парне число`);
    }
    else{
        console.log(`${i} не парне число`);
    }
}


function add(a, b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

let multiply = (a,b)=>a*b;

function divide(a,b){
    if(b !== 0){
        return a/b;
    }
    else{
        return 'Ділити на 0 не можна';
    }
}

let numberA = Number(prompt('Type number A'));
let numberB = Number(prompt('Type number B'));
let operator = prompt('Type operator +,-,/,*');

switch(operator){
    case '+':
        console.log(`${numberA} + ${numberB} = ${add(numberA, numberB)}`);
        break;
    case '-':
        console.log(`${numberA} - ${numberB} = ${subtract(numberA, numberB)}`);
        break;
    case '*':
        console.log(`${numberA} * ${numberB} = ${multiply(numberA, numberB)}`);
        break;
    case '/':
        console.log(`${numberA} / ${numberB} = ${divide(numberA, numberB)}`);
        break;
    default:
        console.log('Heвідома операція');
        break;       
}
