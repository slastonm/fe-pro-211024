let mouseEl = document.querySelector('.mouse');
let hoverEl = document.querySelector('.hover');

// mouseEl.addEventListener('mouseover', function(){
//     this.style.background ='green';
//     this.innerHTML = 'Over DIV';
//     hoverEl.style.background ='green';
// });

// mouseEl.addEventListener('mouseout', function(){
//     this.style.background ='yellow';
//     this.innerHTML = 'Out DIV';
//     hoverEl.style.background ='yellow';
// });

mouseEl.addEventListener('mousemove', function(e){
    console.log(e);
    mouseEl.innerHTML = `
    <h3>${e.type}</h3>
    Conrdinate X ${e.clientX} Y:${e.clientY}
    `;
    hoverEl.innerHTML =`PageX ${e.pageX} Page Y ${e.pageY} <br> ClientX: ${e.clientX} ClientY${e.clientY} <br> Inside div X ${e.offsetX} and Y: ${e.offsetY}<br>
    Monitor cordinate X ${e.screenX} and Y ${e.screenY}`;
});

let inputEl = document.querySelector('input');
let inputInfo = document.querySelector('.inputIfnfo');
//keydown
//keyup
//keypress застарілий
inputEl.addEventListener('keydown', function(e){
    inputInfo.innerHTML = `${e.type}`;
    console.log(e);
});
inputEl.addEventListener('keydown', function(e){
    inputInfo.innerHTML = `${e.type}<br>Code: ${e.code}<br>Shift ${e.shiftKey} <br> Ctrl ${e.ctrlKey} <br> Alt ${e.altKey}`;
});

document.onkeyup = function(e){
    inputInfo.innerHTML = `Document keyUP ${e.code}`;
}

let divText = document.querySelector('.copyel');
divText.addEventListener('copy', (e)=>{
    alert('Copi not allowe');
    e.preventDefault();
});

inputEl.addEventListener('paste', function(e){
    alert('Blocked');
    e.preventDefault();
});

window.addEventListener('scroll', function(){
    let scroolPosition = window.scrollY;
    console.log(scroolPosition);
});