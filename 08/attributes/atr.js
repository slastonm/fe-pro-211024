let containerEl = document.querySelector('.container');

let linkEl = document.querySelector('.link-el');
console.log(`Link element target value ${linkEl.getAttribute('target')}`);
console.log(`Link element href value ${linkEl.getAttribute('href')}`);
console.log(`Link element class value ${linkEl.getAttribute('class')}`);

let newLink = document.createElement('a');
newLink.innerHTML = 'New link js';
newLink.setAttribute('href','https://prog.kiev.ua/');
newLink.setAttribute('target', '_blank');
newLink.setAttribute('class', 'js-link test');
containerEl.appendChild(newLink);

let inputEl = document.querySelector('input');
let buttonEl = document.querySelector('button');

inputEl.setAttribute('placeholder', 'Input text');
buttonEl.setAttribute('disabled', 'disabled');

console.log(`link element has atribute class ${linkEl.hasAttribute('class')}`);
console.log(`link element has atribute style ${linkEl.hasAttribute('style')}`);

linkEl.removeAttribute('target');
linkEl.removeAttribute('id');
linkEl.removeAttribute('class');

linkEl.setAttribute('style','background: orange;display: inline-block;padding: 10px;margin-right: 20px;');
console.log(linkEl.style.cssText);
linkEl.style.cssText +=' font-size:30px;';
// linkEl.setAttribute('style','font-size:30px');

