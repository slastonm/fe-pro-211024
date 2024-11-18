let heaederEl = document.createElement('header');
let bodyEl = document.querySelector('body');
bodyEl.appendChild(heaederEl);


const menuData = [
    { name: 'Головна', url: '/' },
    { name: 'Про нас', url: '/about' },
    { name: 'Послуги', url: '/services' }
];

menuData.forEach((item)=>{
    const linkEl = document.createElement('a');
    linkEl.innerHTML = item.name;
    linkEl.setAttribute('href', item.url);
    heaederEl.appendChild(linkEl);
});

let [...linksEl] = document.querySelectorAll('header a');
linksEl.forEach(item=>{
    item.setAttribute('target', '_blank');
    item.classList.add('dark-link');
});

linksEl.forEach(item=>{
    item.classList.remove('dark-link');
})


let cirleContainerEl = document.createElement('section');
cirleContainerEl.style.maxWidth = '1000px';
cirleContainerEl.style.display = 'flex';
cirleContainerEl.style.flexWrap ='wrap';
cirleContainerEl.style.margin = '50px auto';
cirleContainerEl.style.gap ='15px';
bodyEl.appendChild(cirleContainerEl)

function getRandomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}

for(let i=0; i<50; i++){
    const divEl = document.createElement('div');
    divEl.style.width ='50px';
    divEl.style.height ='50px';
    divEl.style.borderRadius ='100%';
    divEl.style.backgroundColor = getRandomColor();
    cirleContainerEl.appendChild(divEl);
}

let [...circleDivs] = document.querySelectorAll('section div');
circleDivs.forEach(element =>{
    element.classList.add('circle-element');
});

const elementsArray = [
    { text: 'Елемент 1', usePrepend: true },
    { text: 'Елемент 2', usePrepend: false },
    { text: 'Елемент 3', usePrepend: true }
];

elementsArray.forEach(item=>{
    let pEl = document.createElement('p');
    pEl.innerHTML = item.text;
    if(item.usePrepend){
        cirleContainerEl.before(pEl);
    }
    else{
        cirleContainerEl.after(pEl);
    }
})

