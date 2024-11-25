let currenceFromEl = document.querySelector('#currencyFrom');
let currencyToEl = document.querySelector('#currencyTo');
let calculateValueEl = document.querySelector('#calculateValue');

function checkFields(){
    if(currenceFromEl.value !== '' && currencyToEl.value !== ''){
        calculateValueEl.removeAttribute('disabled');
    } 
    else{
        calculateValueEl.setAttribute('disabled', '');
    }
}

currenceFromEl.addEventListener('input', checkFields);
currencyToEl.addEventListener('input', checkFields);

let outputEl = document.querySelector('strong');
calculateValueEl.addEventListener('click', function(e){
    e.preventDefault();
    let resultValue = Number(currenceFromEl.value)/Number(currencyToEl.value);
    outputEl.innerHTML = resultValue;
});


let lastScroolY = 0;
function onScrollAlert(){
    let curentScrollY = window.scrollY;
    if(lastScroolY < 200 && curentScrollY >=200){
        alert('200px');
    }
    lastScroolY = curentScrollY;
}

window.addEventListener('scroll', onScrollAlert);