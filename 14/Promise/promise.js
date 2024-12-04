let firstPromise = new Promise(function(resolve, reject){
    console.log('Promise work');
});

let x = 2;
let y = 0;

let calcPromise = new Promise(function(resolve, reject){
    if(y === 0){
        console.log('reject');
        reject('0 is bad value')
    }else{
        let result = x/y;
        console.log(`resolve ${result}`);
        resolve(result);
    }
});

calcPromise.then(function(result){
    alert(`Resovle ${result}`);
}).catch(function(error){
    alert(error);
});

let number = 0;
let checkNumber = new Promise(function(resolve, reject){
    if(number>2){
        resolve('Nice number');
    }else{
        reject('Bad value');
    }
});

checkNumber.then(function(value){
    console.log(value);
}).catch(function(e){
    console.log(`Promise error ${e}`);
});

let firstP = new Promise(function(resolve){
    resolve('First porimse value');
});

let secondP = firstP.then(function(value){
    return`${value} + second promise`;
});

let thirdP = secondP.then(function(value){
    return `${value} + thirdP`;
});

let finalP = thirdP.then(function(value){
    return `${value} + End`;
});

finalP.then(function(finalValue){
    console.log(finalValue);
});


// simple promise
new Promise(resolve=> resolve('first value'))
.then(value=>`${value}+2`)
.then(value=>`${value}+3`)
.then(value=>{
    console.log(`Short form ${value}`);
});


let myFinalyPromise = new Promise((resolve, reject)=>{
    let value = false;
    if(value){
        resolve('!!!!!! Promise true !!!!!!');
    }else{
        reject('!!!!! False value reject !!!!!');
    }
});

myFinalyPromise
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log('Finaly work');
});


// function loadData(url, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             callback(null, xhr.responseText);
//         } else {
//             callback(new Error(xhr.statusText), null);
//         }
//     };
//     xhr.onerror = function() {
//         callback(new Error("Network error"), null);
//     };
//     xhr.send();
// }

// loadData('https://example.com/data', function(error, data) {
//     if (error) {
//         console.error("Failed to load data:", error);
//     } else {
//         console.log("Data loaded successfully:", data);
//     }
// })


function loadData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(new Error(xhr.statusText));
            }
        };
        xhr.onerror = function() {
            reject(new Error("Network error"));
        };
        xhr.send();
    });
}

loadData('https://example.com/data')
    .then(data => {
        console.log("Data loaded successfully:", data);
    })
    .catch(error => {
        console.error("Failed to load data:", error);
    });

