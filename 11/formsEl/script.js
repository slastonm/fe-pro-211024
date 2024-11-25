let [...radioButtons] = document.querySelectorAll('input[name="size"]');
let formEl = document.querySelector('form');
let sizeInfoEl = document.querySelector('.sizeInfo');
formEl.addEventListener('change', function(){
    let selectSize = '';
    for(radioButton of radioButtons){
        if(radioButton.checked){
            selectSize = radioButton.value;
        }
        sizeInfoEl.innerHTML = selectSize;
    }
});

let checkBoxEl = document.querySelector('#accept');
checkBoxEl.addEventListener('change', function(){
    if(this.checked){
        alert('Rules accepted');
    }
    else{
        alert('Rules accepted False !!');
    }
});

let resultBtn = document.querySelector('.showResult');
let resultBox = document.querySelector('.resultBox');
let [...checkBoxes] = document.querySelectorAll('input[name="Transport"]');
// let [...checkBoxes] = document.querySelectorAll('input[name="Transport"]:checked');

let checkedValue = [];
resultBtn.onclick = function(){
    resultBox.innerHTML = "";
    checkedValue = [];
    checkBoxes.forEach(element => {
        if(element.checked){
            checkedValue.push(element.value);
        }
    });
    checkedValue.forEach(item=>{
        let pEl = document.createElement('p');
        pEl.innerHTML = item;
        resultBox.appendChild(pEl);
    });
}


let selectEl = document.querySelector('select');
let selectedBox = document.querySelector('h4');
selectEl.addEventListener('change', function(){
    selectedBox.innerHTML = this.value;
});