let btnClick = document.querySelector('.clickButton');
let counterEl = document.querySelector('.counter');

let count =0;

function icreseCounter(){
    count++;
    counterEl.innerHTML = `Counter ${count}`;
    if(count>10){
        btnClick.removeEventListener('click', icreseCounter);
        alert('Event removed')
    }
}

btnClick.addEventListener('click',icreseCounter);

let containerEl = document.querySelector('.container');
for(let i=0; i<100; i++){
    let divEl = document.createElement('div');
    divEl.style.width='50px';
    divEl.style.height='50px';
    divEl.style.background='orange';
    divEl.style.marginRight='10px';
    divEl.style.marginBottom='10px';
    divEl.innerHTML = `${i+1}`;
    // divEl.onclick = function(){
    //     this.remove();
    // }
    containerEl.appendChild(divEl);
}

containerEl.onclick = function(e){
    console.log(e.target);
    if(e.target.tagName === 'DIV'){
        e.target.remove();
    }
}

let btnContainer = document.querySelector('.blockContainer');
btnContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        let buttonClassName = e.target.className;
        alert(`Клік по кнопці ${buttonClassName}`);
    }
});

let menuBtn = document.querySelector('.menu');
let navEl = document.querySelector('nav');

menuBtn.onclick = function(){
    this.classList.toggle('active');
    // menuBtn.classList.toggle('active');
    navEl.classList.toggle('active');
}