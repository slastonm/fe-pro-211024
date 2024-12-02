function showAlert(){
    alert('Hello world');
}
// setTimeout
// setTimeout(showAlert, 5000);
let timeOutAlert = setTimeout(showAlert, 8000);

let btnCancelAlertEl = document.querySelector('.cancel-alert');

btnCancelAlertEl.onclick = function(){
    clearTimeout(timeOutAlert);
    alert('Cancel temeout');
}

// setInterval
let count = 0;
// setInterval(function(){
//      alert(`Hello ${count}`);
//      count++;
// },3500);
function countFn(){
    count++;
    document.querySelector('p').innerHTML = `Count: ${count}`;
    if(count>40){
        clearInterval(intervalCount);
        alert('Count stop');
    }
}

let intervalCount = setInterval(countFn, 1000);