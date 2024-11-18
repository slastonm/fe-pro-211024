let firstEl = document.querySelector('#first');
let secondEl = document.querySelector('#second');
let thirdEl = document.querySelector('#third');
let isTunel = false; // Зверху вниз
// let isTunel = true;// Знизу вверх


firstEl.addEventListener('click', function(e){
    this.style.backgroundColor = 'green';
    alert('alert 1');
}, isTunel);

secondEl.addEventListener('click', function(e){
    this.style.backgroundColor = 'orange';
    alert('alert 2');
    // e.stopPropagation();
}, isTunel);

thirdEl.addEventListener('click', function(e){
    this.style.backgroundColor = 'yellow';
    alert('alert 3');
    e.stopPropagation();
}, isTunel);