let bodyEL = document.querySelector('body');
// bodyEL.classList.add('dark');
let btnEl = document.querySelector('button');
let [...pElement] = document.querySelectorAll('p');

btnEl.onclick = function(){
    // bodyEL.classList.toggle('dark');
    let root = document.documentElement;
    console.log(root);
    let curentBg = getComputedStyle(root).getPropertyValue('--bg-color');
    console.log(curentBg);
    if(curentBg === 'red'){
        root.style.setProperty('--bg-color','black');
        root.style.setProperty('--text-color','red');
        root.style.setProperty('--title-color','yellow');
    }
    else{
        root.style.setProperty('--bg-color','red');
        root.style.setProperty('--text-color','yellow');
        root.style.setProperty('--title-color','white');
    }
}