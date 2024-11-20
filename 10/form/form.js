let formEl = document.querySelector('form');
let clearBtnEl = document.querySelector('.reset');
let sendBtnEl = document.querySelector('.sendBtn');

clearBtnEl.onclick = function(e){
    // e.preventDefault();
    formEl.reset();
}

sendBtnEl.onclick = function(e){
    // e.preventDefault();
    formEl.submit();
}

console.log(formEl);
let [...inputsArr] = formEl.elements;
console.log(inputsArr);

let userName = document.querySelector('#username');
let userEl = document.querySelector('.user');
userName.onkeyup = function(){
    let userNameValue = this.value;
    // userEl.innerHTML = userNameValue;

    if(userNameValue.trim().toUpperCase() === 'ADMIN'){
        userEl.innerHTML = 'Hello Admin !!!'
    }
}
let buttonTen = document.querySelector('.valueset');
buttonTen.onclick = function(){
    userName.value = 10;
}