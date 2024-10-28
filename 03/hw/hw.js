// let userNumber = Number(prompt('Напишіть число'));
// let checkNumberResult = `Це число є парне: ${userNumber%2 === 0}`;
// console.log(checkNumberResult);

// let userAge = Number(prompt('Ваш вік?'));
// console.log(`Користувачу білше 18 ${userAge>=18}`);

// let firstNumber = Number(prompt('First number'));
// let secondNumber = Number(prompt('second number'));
// let thirdNumber = Number(prompt('third number'));

// if(firstNumber>=secondNumber && firstNumber>=thirdNumber){
//     console.log(`Перше число найбільше`);
// }
// else if(secondNumber>firstNumber && secondNumber>thirdNumber){
//     console.log(`Друге число найбільше`);
// }
// else{
//     console.log(`Третє число найбільше`);
// }

let monthNumber = Number(prompt('напишіть номур від 1 до 12'));
if(monthNumber >=1 && monthNumber<=12){
    if(monthNumber>=3 && monthNumber<=5){
        console.log('Весна');
    }
    else if(monthNumber>=6 && monthNumber<=8){
        console.log('Літо');
    }
    else if(monthNumber>=9 && monthNumber<=11){
        console.log('Осінь');
    }
    else{
        console.log('Зима');
    }
}
else{
    console.log('Спробуйте інше чилсо від 1 до 12');
}

