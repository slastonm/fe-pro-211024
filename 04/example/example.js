// let globalVar = 'Hello';

for(let i=0; i<5; i++){
    let globalVar = 0; // local - global in for
    globalVar+=i;
    for(let c = 10; c>0; c-- ){
        let result = 0
        result+=c;
    }
    // console.log(globalVar+result);

}

// console.log(globalVar);

function test(a){
    let testResult = a>10;
}

let add = function(a,b){
    let result  = 0;
    result = a+b;
    test(a);
    console.log(testResult);
    return result;
    
}

console.log(add(2,3));

// var