window.onload = function(){
    let inputEl = document.querySelector('input');
    // console.log(inputEl);
    console.dir(inputEl);

    function hello(){
        alert('Hello');
    }    

    let helloBtn = document.querySelector('.hello');
    helloBtn.onclick = function(){
        alert('Hello from js file')
    }

    function showAlert(){
        alert('Show from function')
    }
    let addEvent = document.querySelector('.add');
    addEvent.addEventListener('click', showAlert);

    let removeBtn = document.querySelector('.remove');
    removeBtn.addEventListener('click', function(){
        addEvent.removeEventListener('click', showAlert);
        alert('Event removed');
    });
    let [...pElments] = document.querySelectorAll('p');
    pElments.forEach(item=>{
        item.onclick = function(){
            console.log(this);
            this.innerHTML ='New text';
            this.style.backgroundColor ='orange';
        }
    });

    let emptyLinkEl = document.querySelector('.empty');
    emptyLinkEl.onclick = function(event){
        console.log(event);
        console.log(event.target);
        event.preventDefault();
    }

    let blockedEl = document.querySelector('.blocked');
    blockedEl.onclick = function(evenet){
        evenet.preventDefault();
        alert('Link blocked');
    }

    let ulEl = document.querySelector('ul');
    ulEl.onclick = function(e){
        console.log(e.target);
        if(e.target.tagName === 'LI'){
            let liEl = e.target
            liEl.style.backgroundColor = 'darkblue';
            liEl.style.color = 'white';
        }
    }
}

document.addEventListener('DOMContentLoaded', ()=>{

});

document.addEventListener('load', function(){

});

document.onload = function(){
    
}
